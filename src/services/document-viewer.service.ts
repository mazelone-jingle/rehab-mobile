import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Injectable({
  providedIn: 'root'
})
export class DocumentViewerService {

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private loggerSvc: LoggerService) { }

  getFilePath() {
    const localDirectory = 'assets/pdf';
    return `${this.file.applicationDirectory}www/${localDirectory}`;
  }

  viewLocalPdf(file: string) {
    this.file.checkFile(this.file.dataDirectory, file)
      .then(isHaveFile => {
        // 두 번 후에 파일을 여는 경우 (directory에서 file 있기 때문임)
        if (isHaveFile) {
          this.fileOpener.open(`${this.file.dataDirectory}/${file}`, 'application/pdf');
        } else {
          // 여기로 안 올 것 같음 (버그 나올까 봐 일단 써 넣음)
          this.file.copyFile(this.getFilePath(), file, this.file.dataDirectory, file).then(res => {
            this.fileOpener.open(res.nativeURL, 'application/pdf');
          }).catch(e => this.loggerSvc.error('file opener error:', e));
        }
      }).catch(_ => {
        // 첫 번에 파일을 여는 경우 (directory에서 file 없기 때문임)
        this.file.copyFile(this.getFilePath(), file, this.file.dataDirectory, file).then(res => {
          this.fileOpener.open(res.nativeURL, 'application/pdf');
        }).catch(e => this.loggerSvc.error('file opener error:', e));
      });
  }
}
