
export interface IStopSignal {
  channelId: string;
  messageStatus: string;
  messageType: string;
  sendDateTime: Date;
  userEmail: string;
  isExerciseStop: boolean;
}
