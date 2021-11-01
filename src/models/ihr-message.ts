export interface IHrMessage {
  channelId: string;
  messageStatus: string;
  messageType: string;
  rate: number;
  round: number;
  seconds: number;
  userEmail: string;
  sendDateTime: Date;
}
