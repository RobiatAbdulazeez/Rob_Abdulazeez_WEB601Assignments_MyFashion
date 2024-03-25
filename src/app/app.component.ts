import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from "./content-list/content-list.component";
import { FilterContentPipe } from './filter-content.pipe';
import { FashionService } from './services/fashion.service';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "./content-card/content-card.component";
import { MessageComponent } from "./message/message.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ContentListComponent, FilterContentPipe, FormsModule, CommonModule, ContentCardComponent, MessageComponent]
})
export class AppComponent implements OnInit {
  selectedItem = null;
  inputId: number | null = null; // Holds the user input

   // Inject both FashionService and MessageService
  constructor(private fashionService: FashionService,private messageService: MessageService) {}

  ngOnInit() {
    const yourChosenId = 2;
    this.fashionService.getContentItemById(yourChosenId).subscribe(item => {
      this.selectedItem = item;
    });
  }

  // Implement the loadContentById method
  loadContentById() {
    if (this.inputId === null || this.inputId < 0) {
      // Input is invalid or not a number
      this.messageService.sendMessage("Invalid ID entered.");
      return;
    }
    
    this.fashionService.getContentItemById(this.inputId).subscribe({
      next: (item) => {
        if (item) {
          this.selectedItem = item;
          this.messageService.sendMessage(`Content Item at id: ${this.inputId} loaded.`);
        } else {
          // No item found with that ID
          this.messageService.sendMessage("No content found with the entered ID.");
        }
      },
      error: () => {
        // Handle any errors that might occur during retrieval
        this.messageService.sendMessage("An error occurred while retrieving the content.");
      }
    });
  }
}