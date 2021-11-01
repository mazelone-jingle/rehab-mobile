import { DocumentViewerService } from './../../services/document-viewer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {

  constructor(private documentViewerService: DocumentViewerService) { }

  ngOnInit() {
  }

  openPdfFile(type: string) {
    let file = '';
    switch (type) {
      case 'heart recovering': {
        file = 'heartRecovering.pdf';
        break;
      }
      case 'app manual': {
        break;
      }
      case 'q&a': {
        break;
      }
      case 'lifurance': {
        break;
      }
      default:
      break;
    }

    this.documentViewerService.viewLocalPdf(file);
  }

}
