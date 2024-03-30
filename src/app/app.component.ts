import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from "./content-list/content-list.component";
import { FilterContentPipe } from './filter-content.pipe';
import { FashionService } from './services/fashion.service';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Content } from './helper-files/content-interface';
import { ContentCardComponent } from "./content-card/content-card.component";
import { MessageComponent } from "./message/message.component";
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ContentListComponent, FilterContentPipe, FormsModule, CommonModule, ContentCardComponent, MessageComponent,HttpClientModule,ModifyContentComponentComponent]
})
export class AppComponent implements OnInit {
  selectedItem: Content | null = null;
  inputId: number | null = null; // Holds the user input
  contentItems: Content[] = []; // To hold the list of content items


   // Inject both FashionService and MessageService
  constructor(private fashionService: FashionService,
    private messageService: MessageService,
    ) {}

  ngOnInit() {
    this.loadAllContent(); // Load all content on init
  }
  loadAllContent() {
    this.fashionService.getContent().subscribe({
      next: (items) => {
        this.contentItems = items; // Update list of content items here
      },
      error: (err) => {
        console.error("Failed to fetch content items", err);
        this.messageService.sendMessage("Failed to load content items.");
      }
    });
  }
  loadContentById() {
    if (this.inputId === null || this.inputId < 0) {
      this.messageService.sendMessage("Invalid ID entered.");
      return;
    }

    this.fashionService.getContentItemById(this.inputId).subscribe({
      next: (item) => {
        if (item) {
          this.selectedItem = item;
          this.messageService.sendMessage(`Content Item at id: ${this.inputId} loaded.`);
        } else {
          this.messageService.sendMessage("No content found with the entered ID.");
        }
      },
      error: () => {
        this.messageService.sendMessage("An error occurred while retrieving the content.");
      }
    });
  }

  handleContentUpdated(event: boolean) {
    if (event) {
      this.loadAllContent(); // Refresh the content list when content is added/updated
    }
  }
}
