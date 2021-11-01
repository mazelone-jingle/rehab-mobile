export interface IEmergencyMessage {
  rate: number;
  seconds: number;
  userEmail: string;
  channelId: string;
  messageType: string;
  messageStatus: string;
  sendDateTime: Date;
  rpeValue: number;
}
