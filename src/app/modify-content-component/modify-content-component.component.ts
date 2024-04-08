import { Component,EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FashionService } from '../services/fashion.service';
import { MessageService } from '../services/message.service';
import { ReactiveFormsModule,FormControl,FormGroup,Validators} from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [MatDialogModule,ReactiveFormsModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatIconModule],
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
  
    constructor(public dialog: MatDialog,private snackBar: MatSnackBar,private fashionService: FashionService, private messageService: MessageService) {}

    openAddContentDialog(): void {
        const dialogRef = this.dialog.open(ContentDialogComponent, {
          width: '250px',
          data: {}, // Pass data if updating, for example
        });
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) { // If dialog closed with success
                // Emit event or refresh the list as necessary
                this.contentAdded.emit(result); // Emit the added content
                this.showSuccessMessage(`${result.title} added successfully!`); // Show success message
              } else {
                // Handle the case where dialog was closed without submitting the form
                console.log('Dialog was closed without adding/updating content');
                // No action needed, or you might reset some state if necessary
              }
        });
        
      }
      showSuccessMessage(content: string) {
        this.snackBar.open(`${content} added successfully!`, 'Close', {
          duration: 3000,
        });
  }
  onSubmit(){}
}