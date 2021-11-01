import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { IEmergencyMessage } from 'src/models/i-emergency-message';
import { AuthService } from 'src/services/auth.service';
import {
  ChatService,
  IChatChannel,
  IChatParticipants,
  IMessage,
  ITextMessage,
  IUser,
  OnlineUser,
  PagedList,
} from 'src/services/chat.service';
import { LoggerService } from 'src/services/logger.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnChanges {
  @Output()
  messages: Array<ITextMessage | IEmergencyMessage> = [];
  @Output() sendCurrentRpeEvent = new EventEmitter<number>();
  @Input() reservId: number;
  @Input() channelId: string;
  @Input() rpeMsg: IEmergencyMessage;
  message: any;
  participants: Array<IChatParticipants> = [];
  userList: Array<IUser> = [];
  hubConnected = false;
  //TODO: 채널 리스트 에서 선택한 채널의 Id 값을 가지고 와야 함.
  myEmail: string;
  curChannel: IChatChannel;
  //TODO : 채널리스트에서 선택한 채널의 참석자 중 자신의 이메일과 일치하는 정보를 할당.
  curParticipant: IChatParticipants;
  showOptions: boolean;
  constructor(
    private chatSvc: ChatService,
    private menuCtrl: MenuController,
    private authSvc: AuthService,
    private logger: LoggerService
  ) {
    if (!this.hubConnected) {
      //  this.chatSvc.readyChat();
      this.logger.log('reserv id', this.reservId);
      this.logger.log('channelId', this.channelId);
      this.chatSvc.connection$.subscribe((connected: boolean) => {
        this.hubConnected = connected;
      });
      this.chatSvc.newOnlineUser$.subscribe((res) => {
        this.logger.log(res);
      });
      this.chatSvc.join$.subscribe((channelId) => {
        this.channelId = channelId;
      });
      this.chatSvc.connectionError$.subscribe((reason: any) => {
        this.hubConnected = false;
        this.logger.error('connection error', reason);
      });
      this.chatSvc.createdChannel$.subscribe((channel: IChatChannel) => {
        this.logger.log('created channel', channel);
      });
      this.chatSvc.getChannelList$.subscribe(
        (channelList: PagedList<IChatChannel>) => {
          this.logger.log('get channel list', channelList);
        }
      );
      this.chatSvc.recvMessage$.subscribe((message: ITextMessage) => {
        this.messages.push(message);
      });
      this.chatSvc.userList$.subscribe((userList: Array<IUser>) => {
        this.userList = userList;
      });

      this.chatSvc.newOnlineUser$.subscribe((user: OnlineUser) => {
        const newParticipants: IChatParticipants = {};
        this.participants.push(newParticipants);
      });
      this.chatSvc.leave$.subscribe((leave) => {});
      this.chatSvc.getParticipants$.subscribe((participants) => {});
    }
  }

  @HostListener('focus', ['$event.target'])
  inputFocus(target) {
    if (target.id === 'chat-input') {
      console.log(target);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.rpeMsg?.currentValue) {
      this.messages.push(changes.rpeMsg.currentValue);
    }
  }
  ngOnInit() {
    this.logger.log('reservId ? ', this.reservId);
    this.join();
  }

  join() {
    this.joinAsync(this.reservId);
  }

  sendMessage() {
    const chatInput = document.getElementById('chat-input') as HTMLInputElement;
    const message = chatInput.value;

    const msg: ITextMessage = {
      messageType: 'TEXT',
      messageText: message,
      sendDateTime: new Date(),
      messageStatus: 'send',
      userEmail: this.authSvc.username,
      channelId: this.channelId,
    };
    this.logger.log('msg', msg);
    this.chatSvc.sendMessage(msg);
    this.messages.push(msg);
    chatInput.value = ''; // clear input field
  }

  sendEmergency(rpe: number) {
    this.sendCurrentRpeEvent.emit(rpe);
  }

  openDrawer() {
    //사용자 초대 및 참여자 리스트 drawer
    this.menuCtrl.enable(true, 'custom');
    this.menuCtrl.open('custom');
  }
  showOptionsToggle(isShow: boolean = true) {
    if (!isShow) {
      this.showOptions = false;
    }
    this.showOptions = !this.showOptions;
  }

  private async joinAsync(reservId: number) {
    if (!this.hubConnected) {
      this.authSvc.extendToken().subscribe(async (isRefresh) => {
        if (isRefresh) {
          await this.chatSvc
            .startAsync()
            .then(() => {
              this.logger.log('실시간 서버에 연결하였습니다.');
              this.chatSvc
                .joinAsync(reservId)
                .then(() => {
                  this.logger.log('진료 모임에 참석하였습니다.');
                })
                .catch((err) => {
                  this.logger.error(
                    '진료모임 참석하는 과정에 실패하였습니다.',
                    err
                  );
                });
            })
            .catch((err) => {
              this.logger.error(
                '실시간 서버에 연결하는 데에 실패하였습니다.',
                err
              );
            });
        }
      });
    }
  }
}
