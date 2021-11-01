import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forChild(),
  ],
  exports: [
    TranslateModule,
  ]
})
export class SharedModule { }
