import { Component,EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FashionService } from '../services/fashion.service';
import { MessageService } from '../services/message.service';
import { ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
    contentForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        creator: new FormControl(''),
        imgURL: new FormControl('',),
        type: new FormControl(''),
        tags: new FormControl(''),
       
      });
    @Output() contentAdded = new EventEmitter<Content>();
  
    constructor(private fashionService: FashionService, private messageService: MessageService) {}
  
    onSubmit():void{
        if (this.contentForm.valid) {
            const formValue: any = this.contentForm.value;
            const tags = formValue.tags ? formValue.tags.split(',').map((tag: string) => tag.trim()) : [];

            const content: Content = {
              title: formValue.title || '', 
              description: formValue.description || '',
              creator: formValue.creator || '',
              imgURL: formValue.imgURL || '',
              type: formValue.type || '',
              tags: tags,
            };
      
            this.fashionService.addContent(content).subscribe({
                next: (content) => {
                  this.contentAdded.emit(content);
                  this.contentForm.reset();
                  // Optionally, display a success message
                },
                error: (error) => {
                  console.error('There was an error!', error);
                  // Optionally, display an error message
                }
              });
            }
          }
        
        }