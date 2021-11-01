import { IReservation } from './i-reservation';
export interface IConsultation {
  userEmail: string;
  id: number;
  from: Date;
  to: Date;
  key: string;
  reservable: boolean;
  description: string;
  reservation: IReservation | null;
}
