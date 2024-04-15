import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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
import { routes } from './app.routes';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,
       ContentListComponent,RouterModule,
        FilterContentPipe, 
        FormsModule, 
        CommonModule, 
        ContentCardComponent,
         MessageComponent,
         HttpClientModule]
})
export class AppComponent  {
  title ='Rob_Fashion';
  constructor(private route: ActivatedRoute,private router: Router) {
    
  }
  
}

