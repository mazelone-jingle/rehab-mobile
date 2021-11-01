import { LANG_KO } from 'src/constants/common';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'minSec'
})
export class MinSecPipe implements PipeTransform {

  constructor(private  translateService: TranslateService) {}

  transform(seconds: number): string {
    let min = 0;
    let sec = 0;
    if (seconds >= 60) {
      min = Math.floor(seconds / 60);
    }
    sec = seconds % 60;
    if (this.translateService.currentLang === LANG_KO) {
      return `${min}분 ${sec}초`;
    } else {
      return `${min}Min ${sec}Sec`
    }
  }

}
