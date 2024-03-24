import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { contentItems } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class FashionService {

  // Constructor function is a default method that runs when an instance of the class is created
  // Since there's nothing to initialize for this service, it's left empty
  constructor(private messageService: MessageService) { }

  
  getContentItems(): Observable<any[]> {
    // Simulate fetching the content array
    const items = of(contentItems); // Assuming contentItems is your data
    items.subscribe(() => {
      this.messageService.sendMessage('Content array loaded!');
    });
    return items;
  }
  
  getContentItemById(id: number): Observable<any> {
    const item = of(contentItems.find(item => item.id === id));
    item.subscribe(() => {
      this.messageService.sendMessage(`Content Item at id: ${id}`);
    });
    return item;
  }
}
