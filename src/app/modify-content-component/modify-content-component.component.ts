import { Component,EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FashionService } from '../services/fashion.service';
import { MessageService } from '../services/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  @Output() contentUpdated = new EventEmitter<boolean>();
  content: Content = this.resetContent();
  showIdInput: boolean = false; // Controls visibility of ID input
  buttonText: string = 'Add Content'; // Text on the action button

  constructor(private fashionService: FashionService, private messageService: MessageService) {}

  addOrUpdateContent() {
    if (this.content.id !== null) {
        
        this.fashionService.updateContent(this.content).subscribe(() => {
            this.contentUpdated.emit(true);
            this.messageService.sendMessage('Content updated successfully'); // Example usage of MessageService
            this.resetForm();
            
        });
    } else {
        // Assuming addContent is implemented in FashionService
        this.fashionService.addContent(this.content).subscribe(() => {
            this.contentUpdated.emit(true);
            this.messageService.sendMessage('Content added successfully'); // Example usage of MessageService
            this.resetForm();
        });
    }
}

private resetContent(): Content {
    return { id: null, title: '', description: '', creator: '', imgURL: '', type: '', tags: [], isSelected: false };
}

private resetForm() {
    this.content = this.resetContent();
    this.showIdInput = false;
    this.buttonText = 'Add Content';
}

toggleIdInput(show: boolean) {
    this.showIdInput = show;
    this.buttonText = show ? 'Update Content' : 'Add Content';
}
}