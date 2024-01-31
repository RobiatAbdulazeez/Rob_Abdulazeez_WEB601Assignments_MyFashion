import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentListComponent } from "./content-list/content-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
   imports: [RouterOutlet, ContentListComponent]
})
export class AppComponent {

  title = 'Rob_Abdulazeez_MyFashion';

  
}
