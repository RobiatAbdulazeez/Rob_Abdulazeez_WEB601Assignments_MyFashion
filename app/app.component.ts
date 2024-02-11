import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from "./content-list/content-list.component";
import { FilterContentPipe } from './filter-content.pipe';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
   imports: [RouterOutlet, ContentListComponent, FilterContentPipe]
})
export class AppComponent {

  title = 'Rob_Abdulazeez_MyFashion';

  
}
