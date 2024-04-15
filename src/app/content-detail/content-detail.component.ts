import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { FashionService } from '../services/fashion.service';
import { RouterModule } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent {
  id: number | undefined;
content: Content | undefined;
  errorMessage: any;

constructor(private route: ActivatedRoute,
private fashionService: FashionService,private messageService:MessageService) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id')); // Access ID from URL
  if (id) {
    this.fashionService.getContentItem(id).subscribe(
      (content: Content) => {
        this.content = content;
        this.messageService.add(`Retrieved content (ID: ${id} - Title: ${content.title})`);
      },
      error => {
        this.errorMessage = error.message;
        this.messageService.add(`Failed to retrieve content (ID: ${id}) - Error: ${error.message}`);
      }
    );
  }}


}
