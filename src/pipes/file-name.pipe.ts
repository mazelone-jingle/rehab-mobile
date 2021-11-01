import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileName'
})
export class FileNamePipe implements PipeTransform {

  transform(fileUrl: string): string {
    if(fileUrl) {
      return fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    }
    return '--'
  }

}
