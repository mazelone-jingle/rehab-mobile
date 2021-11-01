import { ITextMessage } from './../../../services/chat.service';
import { Component, ElementRef, Input, OnInit, Self, AfterViewInit } from '@angular/core';
import { IEmergencyMessage } from 'src/models/i-emergency-message';

@Component({
  selector: 'app-msg-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss'],
})
export class EmergencyComponent implements OnInit, AfterViewInit {
  @Input() message: any;
  constructor(@Self() private element: ElementRef) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const chat = document.querySelector('.chat-container');
    const msg = document.querySelector('.msg-container');
    chat.scrollTop = msg.scrollHeight + this.element.nativeElement.offsetHeight;
  }
}
