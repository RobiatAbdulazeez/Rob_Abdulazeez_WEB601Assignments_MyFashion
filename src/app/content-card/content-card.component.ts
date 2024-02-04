import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterContentPipe } from '../filter-content.pipe';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterContentPipe],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent{
  @Input() contentItem : any;
}
