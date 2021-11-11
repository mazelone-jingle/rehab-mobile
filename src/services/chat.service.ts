import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  HubConnectionState,
  IHttpConnectionOptions,
  LogLevel,
} from '@microsoft/signalr';
import { AuthService } from './auth.service';
import { LoggerService } from './logger.service';
import { IHrMessage } from 'src/models/ihr-message';
import { IEmergencyMessage } from 'src/models/i-emergency-message';
import { IExerciseStepMessage } from 'src/models/i-excercise-step-message';
import { IStopSignal } from 'src/models/istop-signal';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  currentState: HubConnectionState;

  connId = '';

  chatApiUrl = `${environment.rehabHubUrl}`;
  hubConn: HubConnection;
  handShakeSubject: Subject<string> = new Subject();
  connectionEstablished: Subject<boolean> = new Subject();
  joinSubject: Subject<string> = new Subject();
  recvMessage: Subject<ITextMessage> = new Subject();
  newOnlineUser: Subject<OnlineUser> = new Subject();
  leave: Subject<IUserInfo> = new Subject();
  userListSource: Subject<Array<IUser>> = new Subject();
  createdChannelSource: Subject<IChatChannel> = new Subject();
  getChannelListSource: Subject<PagedList<IChatChannel>> = new Subject();
  inviteUserSource: Subject<IChatChannel> = new Subject();
  getParticipantsSource: Subject<Array<IChatParticipants>> = new Subject();
  connectionError: Subject<any> = new Subject();
  recvStopSignalMessage: Subject<IStopSignal> = new Subject();

  connected = false;
  //Observable
  connection$ = this.connectionEstablished.asObservable();
  recvMessage$ = this.recvMessage.asObservable();
  newOnlineUser$ = this.newOnlineUser.asObservable();
  leave$ = this.leave.asObservable();
  userList$ = this.userListSource.asObservable();
  createdChannel$ = this.createdChannelSource.asObservable();
  getChannelList$ = this.getChannelListSource.asObservable();
  inviteUser$ = this.inviteUserSource.asObservable();
  getParticipants$ = this.getParticipantsSource.asObservable();
  connectionError$ = this.connectionError.asObservable();
  recvStopSignalMessage$ = this.recvStopSignalMessage.asObservable();
  handShake$ = this.handShakeSubject.asObservable();
  join$ = this.joinSubject.asObservable();

  constructor(
    private authSvc: AuthService,
    private logger: LoggerService
    ) {}

  public async startAsync() {
    this.logger.log('Hub connecting ...');
    this.logger.log('currentToken - ', this.authSvc.token);

    this.hubConn = new HubConnectionBuilder()
      .withUrl(this.chatApiUrl, {
        accessTokenFactory: () => this.authSvc.token,
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      } as IHttpConnectionOptions)
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Trace)
      .build();

    await this.hubStartAsync();
    //event listener
    this.hubConn.onclose((error: Error) => {
      this.logger.log('connection closed ... error - ', error);
      this.connectionError.next(error);
      this.connected = false;
      this.currentState = this.hubConn.state;
    });

    this.hubConn.onreconnecting((error: Error) => {
      this.connectionError.next(error);
      this.connected = false;
      this.currentState = this.hubConn.state;
    });

    this.hubConn.onreconnected((connId: string) => {
      this.connected = true;
      this.connectionEstablished.next(this.connected);
      this.connId = connId;
      this.currentState = this.hubConn.state;
    });

    this.hubConn.on(ChatMethodName.newOnlineUser, (user: OnlineUser) => {
      this.logger.log('fired join user', user);
      this.newOnlineUser.next(user);
    });

    this.hubConn.on(
      ChatMethodName.handShake,
      (channelId: string, userEmail: string) => {
        this.handShakeSubject.next(userEmail);
      }
    );

    this.hubConn.on('Join', (userInfo: IUserInfo, channelId: string) => {
      this.joinSubject.next(channelId);
      this.logger.log('join channel -', channelId, 'user info - ', userInfo);
    });

    this.hubConn.on(
      ChatMethodName.channelCreated,
      (user: IUserInfo, channel: IChatChannel) => {
        this.logger.log('created new channel', channel);
        this.createdChannelSource.next(channel);
      }
    );

    this.hubConn.on(
      ChatMethodName.channelList,
      (channelList: PagedList<IChatChannel>) => {
        this.logger.log('get channel list', channelList);
        this.getChannelListSource.next(channelList);
      }
    );

    this.hubConn.on(ChatMethodName.messageReceived, (message: ITextMessage) => {
      this.logger.log('message received', message);
      const localTime = new Date(message.sendDateTime + 'Z'); // transfer to local time
      this.recvMessage.next({...message, sendDateTime: localTime});
    });

    this.hubConn.on(ChatMethodName.isExerciseStopReceived, (signal: any) => {
      this.logger.log('isExerciseStop received', signal);
      this.recvStopSignalMessage.next(signal);
    });

    this.hubConn.on(ChatMethodName.left, (user: IUserInfo) => {
      this.logger.log('ssss');
      this.leave.next(user);
    });

    // this.hubConn.on(ChatMethodName.heartRateReceived, (message: IMessage) => {
    //   this.logger.log('heart rate received', message);
    //   this.recvMessage.next(message);
    // });

    // this.hubConn.on(ChatMethodName.rpeReceived, (message: IMessage) => {
    //   this.logger.log('rpe received', message);
    //   this.recvMessage.next(message);
    // });

    this.hubConn.on(ChatMethodName.userList, (users: Array<IUser>) => {
      this.logger.log('get user list', users);
      this.userListSource.next(users);
    });

    this.hubConn.on(
      ChatMethodName.participantsList,
      (participants: Array<IChatParticipants>) => {
        this.logger.log('get participants list', participants);
        this.getParticipantsSource.next(participants);
      }
    );
  }

  async stopAsync() {
    return this.hubConn.stop().then(() => this.removeAllEvents.bind(this));
  }

  async joinAsync(id: number) {
    this.logger.log('join Async', id);
    return this.hubConn
      .invoke('join', id)
      .then((res) => {
        this.logger.log('Join', res);
      })
      .catch((reason) => {
        this.logger.error(`${ChatMethodName.join} event error`, reason);
        throw reason;
      });
  }

  async leaveAsync(channelId: string) {
    return this.hubConn
      .invoke(ChatMethodName.leave, channelId)
      .catch((reason) => {
        this.logger.error(`${ChatMethodName.leave} event error`, reason);
      });
  }

  inviteUser(channelId: number, user: IUser) {
    const participant: IChatParticipants = {
      channelId,
      joinDate: new Date(),
      userEmail: user.email,
    };
    this.hubConn.invoke(ChatMethodName.invite, participant).catch((reason) => {
      this.logger.error(`${ChatMethodName.invite} event error`, reason);
      throw reason;
    });
  }

  getUserList() {
    this.hubConn.invoke(ChatMethodName.users).catch((reason) => {
      this.logger.error(`${ChatMethodName.users} event error`, reason);
      throw reason;
    });
  }

  getChannelList(email: string) {
    this.hubConn.invoke(ChatMethodName.channels, email).catch((reason) => {
      this.logger.error(`${ChatMethodName.channels} event error`, reason);
      throw reason;
    });
  }

  handShake(channelId: string) {
    this.hubConn
      .invoke(ChatMethodName.handShake, channelId)
      .then(() => this.logger.log('message sent'))
      .catch((err) => {
        throw err;
      });
  }

  sendMessage(msg: ITextMessage) {
    this.hubConn.invoke(ChatMethodName.send, msg).catch((reason) => {
      this.logger.error(`${ChatMethodName.send} event error`, reason, msg);
    });
  }

  sendEmergency(msg: IEmergencyMessage) {
    this.hubConn
      .invoke(ChatMethodName.sendEmergency, msg)
      .then(() => {
        this.logger.log('message sent');
      })
      .catch((err) => {
        throw err;
      });
  }

  sendHeartRate(msg: IHrMessage) {
    this.hubConn
      .invoke(ChatMethodName.sendHeartRate, msg)
      .then(() => {
        this.logger.log('message sent');
      })
      .catch((err) => {
        this.logger.error(err);
        throw err;
      });
  }

  sendExerciseStepWithChatHub(msg: IExerciseStepMessage) {
    this.hubConn
      .invoke(ChatMethodName.sendExerciseStep, msg)
      .then(() => {
        this.logger.log('message sent');
      })
      .catch((err) => {
        this.logger.error(err);
        throw err;
      });
  }

  sendStopSignal(signal: IStopSignal) {
    this.hubConn
      .invoke(ChatMethodName.sendStopSignal, signal)
      .then(() => {
        this.logger.log('stop signal sent');
      })
      .catch((err) => {
        this.logger.error(err);
        throw err;
      });
  }

  echoTest(msg: IMessage) {}

  getParticipants(channelId: number) {}

  private async hubStartAsync() {
    return this.hubConn
      .start()
      .then(() => {
        this.logger.log('Current state -> ', this.hubConn.state);
        this.connected = this.hubConn.state === HubConnectionState.Connected;
        if (this.connected) {
          this.connectionEstablished.next(this.connected);
        }
        this.logger.log('Hub connected!');
      })
      .catch((reason) => {
        this.connected = false;
        this.logger.error('Hub connection error', reason);
        this.connectionError.next(reason);
      })
      .finally(() => (this.currentState = this.hubConn.state));
  }

  private removeAllEvents() {
    for (const method in ChatMethodName) {
      if ({}.hasOwnProperty.call(ChatMethodName, method)) {
        this.hubConn.off(method);
        this.logger.debug(`${method} event removed`);
      }
    }
  }
}
export interface IMessage {
  messageId?: number;
  userEmail?: string;
  channelId?: number;
  sendDateTime: Date;
  messageText?: string;
  messageBinary?: ArrayBuffer;
  createdDateTime?: Date;
  messageType: string;
  type: string;
}

export interface ITextMessage {
  messageStatus: string;
  messageText: string;
  messageType: string;
  userEmail: string;
  channelId: string;
  sendDateTime: Date;
}

export interface OnlineUser {
  connectionId?: string;
  userName: string;
  isDoctor: boolean;
}
export interface IChatChannel {
  channelId?: number;
  channelName: string;
  isPublic: boolean;
  createdDateTime?: Date;
  participants?: Array<IChatParticipants>;
  messages: Array<IMessage>;
}
export interface IUser {
  email: string;
  name: string;
}
export interface PagedList<T> {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  items: Array<T>;
}
export interface IChatParticipants {
  participantsId?: number;
  channelId?: number;
  userEmail?: string;
  joinDate?: Date;
  createdDateTime?: Date;
}
export interface IUserInfo {
  connectionId?: string;
  userName: string;
  isDoctor: boolean;
}
export enum ChatMethodName {
  /**
   * firing event when joined new user
   */
  newOnlineUser = 'NewOnlineUser',
  /**
   * firing event when invoked invite message
   */
  invite = 'Invite',
  /**
   * firing event when invoked create channel
   */
  channelCreated = 'CreatedChannel',
  /**
   * firing event when invoked channels
   */
  channelList = 'GetChannelList',
  /**
   * firing event when sent message by other users
   */
  messageReceived = 'ReceiveMessage',
  /**
   * firing event when left another user in channel
   */
  left = 'Leave',

  handShake = 'HandShake',

  /**
   * firing event when sent heartRate data by other users
   */
  heartRateReceived = 'ReceiveHeartRate',
  /**
   * firing event when sent rpe data by other users
   */
  rpeReceived = 'ReceiveRPE',
  /**
   * firing event when invoked users
   */
  userList = 'GetUserList',
  /**
   * firing event when invoked participants
   */
  participantsList = 'GetParticipants',
  /**
   * Invoke Create new channel
   */
  createChannel = 'createChannel',
  /**
   * Invoke join channel
   */
  join = 'join',
  /**
   * Invoke leave channel
   */
  leave = 'leave',
  /**
   * Invoke get user list
   */
  users = 'getUserList',
  /**
   * Invoke get channel list
   */
  channels = 'getChannelList',
  /**
   * Invoke message send
   */
  send = 'sendMessage',

  /**
   * Invoke heartrate message
   */
  sendHeartRate = 'sendHeartRate',

  /**
   * send emergency
   */
  sendEmergency = 'sendEmergency',

  /**
   * send exercise step
   */
  sendExerciseStep = 'sendExerciseStep',

  /**
   * send exercise stop signal
   */
  sendStopSignal = 'sendStopSignal',

  /**
   * Invoke echo test
   */
  test = 'echoTest',
  /**
   * Invoke get channel's participants
   */
  participants = 'getParticipants',

  emergencyReceived = 'ReceiveEmergency',

  exerciseStepReceived = 'ReceiveExerciseStep',

  isExerciseStopReceived = 'ReceiveStopSignal',
}
