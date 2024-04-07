import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { FashionService } from '../services/fashion.service';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Content } from '../helper-files/content-interface';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';


@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent,FilterContentPipe,FormsModule,HoverAffectDirective,ModifyContentComponentComponent]
})

export class ContentListComponent implements OnInit {
  
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }

  @Input() contentItems: Content[] = [];
  @Input() items:Content[] = [];
  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;
  id:any;
  selectedContent?: Content;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  getBookById(){
   return 
  
  }

  constructor(private fashionService: FashionService, private MessageService:MessageService) {}

  ngOnInit() {
    this.fashionService.getContent().subscribe(content => this.contentItems = content);
    this.fashionService.getContentItemById(3).subscribe(content=> this.items = content);
    console.log(this.items);
  }

  addContentToList(newContentItem: Content): void {
    this.fashionService.addContent(newContentItem)
    .subscribe(newContentFromServer =>
    this.contentItems.push(newContentFromServer)
    );
    }
    updateContentInList(contentItem: Content): void {
      this.fashionService.updateContent(contentItem)
      .subscribe(() =>
      console.log("Content updated successfully")
      );
      }
      onSelect(content: Content):void{
        this.selectedContent = content;
        this.MessageService.add(`Content item at ${content.id}`);
        console.log("clicked");
      }   
      onContentAdded(newContent: Content): void {
        this.contentItems = [...this.contentItems, newContent];
        this.MessageService.add('Content added successfully');
      }
  
}