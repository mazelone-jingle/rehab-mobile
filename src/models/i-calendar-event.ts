export interface ICalendarEvent<T> {
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;
  data: T;
}
