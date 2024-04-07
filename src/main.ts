import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';

bootstrapApplication(AppComponent,{
  providers:[
    provideHttpClient(),
    provideProtractorTestingSupport(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
      dataEncapsulation:false
    })),
  ]
})
  .catch((err) => console.error(err));
