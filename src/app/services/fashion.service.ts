import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { contentItems } from '../helper-files/contentDb';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  private apiUrl = 'api/content';

  // Constructor function is a default method that runs when an instance of the class is created
  // Since there's nothing to initialize for this service, it's left empty
  constructor(private http: HttpClient) { }

  
  getContent() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
    }
    getContentItem(id: number): Observable<Content>{ console.log("Retrieving OBSERVABLE content item"); return this.http.get<Content>("api/content/" + id);
  }
  // Method to fetch a single content item by its ID
  getContentItemById(id: number): Observable<any> {
    return of(contentItems.find(item=>item.id ===id));
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };


  // Add method for posting new content
  addContent(content: Content): 
  Observable<Content> {
    return this.http.post<Content>("api/content", content,this.httpOptions);
  }
// Add this method to handle updating content
updateContent(content: Content): Observable<any> {
  return this.http.put<Content>("api/content", content, this.httpOptions );
 
}

}