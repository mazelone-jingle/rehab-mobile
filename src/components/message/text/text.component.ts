import { IEmergencyMessage } from './../../../models/i-emergency-message';
import { ITextMessage } from './../../../services/chat.service';
import { Component, ElementRef, Input, OnInit, Self, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-msg-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit, AfterViewInit {
  @Input() message: any;
  constructor(@Self() private element: ElementRef) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const chat = document.querySelector('.chat-container');
    const msg = document.querySelector('.msg-container');
    chat.scrollTop = msg.scrollHeight + this.element.nativeElement.offsetHeight;
  }

}
