import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { FashionService } from '../services/fashion.service';
import { Content } from '../helper-files/content-interface';

// export interface Content {
//   id: number;
//   imgURL?:string;
//   title: string;
//   description: string;
//   creator: string;
//   type?: string;
//   tags: string[];
// }

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent,FilterContentPipe,FormsModule,HoverAffectDirective]
})

export class ContentListComponent implements OnInit {
  @Input() contentItems: Content[] = [];
  constructor(private fashionService: FashionService) {}

  ngOnInit() {
    this.fashionService.getContent().subscribe(items => {
      this.contentItems = items;
    });
  }
}