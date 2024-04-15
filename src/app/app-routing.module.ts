import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [ {
  path: "",
  redirectTo: "/content-list",
  pathMatch: "full",
},
{ 
  path: "content-list", 
  component: ContentListComponent 
},
{ 
  path: "content-detail/:id", 
  component:ContentDetailComponent 
},
{ 
  path: "**", 
  component: PageNotFoundComponent 
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ActivatedRoute
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
