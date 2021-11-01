import { NgModule } from '@angular/core';
import { AmPmPipe } from './am-pm.pipe';
import { FileNamePipe } from './file-name.pipe';
import { MinSecPipe } from './min-sec.pipe';

@NgModule({
  imports: [],
  declarations: [
    AmPmPipe,
    FileNamePipe,
    MinSecPipe
  ],
  exports: [
    AmPmPipe,
    FileNamePipe,
    MinSecPipe
  ]
})
export class SharedPipesModule { }
