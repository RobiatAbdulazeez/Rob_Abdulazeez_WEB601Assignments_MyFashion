import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  messages: string[] = [];

  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        this.messages = [];
      }
    });
  }
}
