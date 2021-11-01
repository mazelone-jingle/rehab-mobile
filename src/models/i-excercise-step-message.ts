import { IPrescriptionStep } from 'src/services/prescription.service';

export interface IExcerciseStepMessage {
  channelId: string;
  messageStatus: string;
  messageType: string;
  sendDateTime: Date;
  userEmail: string;
  totalMinute: number;
  exerciseType: string;
  totalStepCount: number;
  currentStepCount: number;
  currentStep: IPrescriptionStep;
}
