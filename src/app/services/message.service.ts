import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages = new BehaviorSubject<string>('');


  // Method to send a message
  sendMessage(message: string) {
    this.messages.next(message);
  }

  // Method to clear messages  by resetting to the initial state
  clearMessages() {
    this.messages.next('');
  }

  // Method to receive messages as an observable
  getMessage(): Observable<string> {
    return this.messages.asObservable();
  }
}
