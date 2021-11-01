import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amPm'
})
export class AmPmPipe implements PipeTransform {

  transform(time: string): string {
    if (time !== '--'){
      let h = +(time.substring(0, time.indexOf(':')))
      const m = time.substring(time.indexOf(':') + 1);
      let timeText = 'AM';
      if (h >= 12) {
        timeText = 'PM';
        if (h >12) {
          h = h - 12;
        }
      }
      return `${timeText} ${h}:${m}`
    }
    return time;
  }

}
