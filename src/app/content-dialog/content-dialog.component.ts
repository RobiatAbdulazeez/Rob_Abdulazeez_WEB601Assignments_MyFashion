import { Component, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatFormFieldModule],
  styleUrls: ['./content-dialog.component.scss'],
  templateUrl: './content-dialog.component.html'
})
export class ContentDialogComponent {
  @Input() contentItems: Content[] = [];

  // Assuming `id` should be a number based on common practices. Adjust if necessary.
  title: string = '';
  id: number | null = null;
  type: string = 'Fashion';
  description: string = '';
  imgUrl: string = '';
  creator: string = '';

  constructor(private dialogRef: MatDialogRef<ContentDialogComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }

  addContent(): void {
    if (!this.title) {
      console.error('Title is required for adding content.');
      return;
    }

    // Creating a newContent object that includes all fields.
    const newContent: Content = {
      id: this.id, // Assuming that you might want to input or generate an ID. Adjust as needed.
      title: this.title,
      description: this.description,
      type: this.type,
      imgURL: this.imgUrl,
      creator: this.creator
    };
    this.contentItems.push(newContent);
    this.dialogRef.close(newContent);
  }
}
