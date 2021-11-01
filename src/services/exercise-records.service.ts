import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { IPrescription, PrescriptionService } from './prescription.service';
import { IExercise } from './exercise.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExerciseRecordsService {
  constructor(
    private prescriptionSvc: PrescriptionService
  ) {}

  /**
   * data for calendar
   *
   * @param dailyList
   * @returns
   */
  handleExerciseAllRecords(exerciseRecords: IExercise[]) {
    return exerciseRecords.map(exercise => ({
        title: '',
        startTime: new Date(exercise.date),
        endTime: new Date(new Date(exercise.date).getTime() + exercise.hrs.split(',').length * 1000),
        allDay: false,
        totalSeconds: exercise.hrs.split(',').length,
        rpeStatus: exercise.rpe,
        thrRetention: exercise.thrretention,
        hrs: exercise.hrs,
        prescriptionId: exercise.prescriptionId
      }));
  }

  getExerciseTotalTime(id: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.prescriptionSvc.getPrescriptionById(id).subscribe(pres => {
        resolve(
          (pres.steps
          // .filter(step => step.type.includes('Main'))
          .map(step => step.minute)
          .reduce((prev, curr) => prev + curr) as number)
        );
      });
    });
  }

  /**
   * data for pie chart
   */
  async getExercisePeriodRecords(exerciseRecords: IExercise[], currExercisePeriod: string) {
    const today = new Date().getTime();
    const exerciseInPeriod = exerciseRecords.filter(exer => new Date(exer.date).getTime() >= this.getPeriodDate(today, currExercisePeriod));
    const exerciseTimes = exerciseInPeriod.length;
    let exerciseTotalTime = 0;
    let thrRetention = 0;
    if (exerciseInPeriod.length > 0) {
      const prescriptionIdArray = exerciseInPeriod.map(exercise => exercise.prescriptionId);
      const uniqueIdArray = prescriptionIdArray.filter((item, pos) => prescriptionIdArray.indexOf(item) === pos);
      const promises = await uniqueIdArray.map(id => this.getExerciseTotalTime(id));
      const everyPrescriptionExerciseTime = await Promise.all(promises);
      exerciseTotalTime = prescriptionIdArray
      .map(id => uniqueIdArray.indexOf(id))
      .map(idx => everyPrescriptionExerciseTime[idx])
      .reduce((prev, curr) =>  prev + curr);
      thrRetention =
        Math.round(exerciseInPeriod
          .map(exercise => exercise.thrretention)
          .filter(exercise => !!exercise)
          .reduce((prev, curr) => prev + curr, 0) / exerciseTimes);
    }
    return {exerciseTimes, exerciseTotalTime, thrRetention};
  }

  getPeriodDate(today: number, currExercisePeriod: string) {
    let minusMilliSeconds = 0;
    let targetDate;
    switch (currExercisePeriod) {
      case '1주일':
        minusMilliSeconds = 7 * 24 * 60 * 60 * 1000;
        targetDate = today - minusMilliSeconds;
        break;
      case '1달':
        minusMilliSeconds = 30 * 24 * 60 * 60 * 1000;
        targetDate = today - minusMilliSeconds;
        break;
      case '3달':
        minusMilliSeconds = 90 * 24 * 60 * 60 * 1000;
        targetDate = today - minusMilliSeconds;
        break;
      case '6달':
        minusMilliSeconds = 180 * 24 * 60 * 60 * 1000;
        targetDate = today - minusMilliSeconds;
        break;
      case '1년':
        minusMilliSeconds = 365 * 24 * 60 * 60 * 1000;
        targetDate = today - minusMilliSeconds;
        break;
      default:
        break;
    }
    return targetDate;
  }

}
