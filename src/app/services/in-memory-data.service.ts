import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';
import { contentItems } from '../helper-files/contentDb';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    // Example data, adjust according to your Content structure
    const content : Content[] = contentItems;
    return { content };
}

// Utility method to generate IDs
genId(contents: Content[]): number {
  return contents.length > 0 ? Math.max(...contents.map(content => content.id || 0)) + 1 : 2000;
}
}

