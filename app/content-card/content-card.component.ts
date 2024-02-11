import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterContentPipe } from '../filter-content.pipe';
import { HoverAffectDirective } from '../hover-affect.directive';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterContentPipe,HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent{
  @Input() contentItem : any;
}
