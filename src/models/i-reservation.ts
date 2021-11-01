export interface IReservation {
  approvalResult?: boolean;
  channelId?: string;
  confirmDate?: Date;
  consultationId: number;
  from: Date;
  id?: number;
  patientEmail: string;
  regDate?: Date;
  to: Date;
  userEmail: string;
}
