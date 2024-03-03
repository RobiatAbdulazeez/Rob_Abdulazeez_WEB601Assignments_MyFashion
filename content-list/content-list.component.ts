import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContentCardComponent } from "../content-card/content-card.component";
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { CreateContentComponent } from "../create-content/create-content.component";

export interface Content {
  id: number;
  imgURL?:string;
  title: string;
  description: string;
  creator: string;
  type?: string;
  tags: string[];
}

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent, FilterContentPipe, FormsModule, HoverAffectDirective, CreateContentComponent]
})
export class ContentListComponent implements OnInit {
  // DisplayContentInformation(contentItem: Content) {
  //   console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
  //   }


    // Property to bind to the input field, holding the user's title search
    searchTitle: string = '';
    //  indicate if a content item with the searched title exists.
    contentExists: boolean = false;
     // Message to display the result of the search.
     message: string = '';
    
     selectedTitle: string | null = null;

     // Method to check if a content item exists with the given title.
     checkContentExists() {
      // Find the item by title, considering case-insensitivity.
      const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    
      // Update the flag and message based on whether the item was found.
      this.contentExists = !!foundItem;
      this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    
      // Set the selectedTitle to highlight the found item, or reset it if no item is found.
      this.selectedTitle = foundItem ? foundItem.title : null;
    }

    onNewContentAdded(newContent: any) {
      this.contentItems.push(newContent);
    }
    
    contentItems :Content[];
    contentItem ={
              id: 1,
              imgURL:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmOZeTawY4IY_vpZzTYjudrBcj4Gg6_nvfTwqpuMbTBpXc6dmFUtRWfcTS-mDcWz6BU0FblUPdcttQ30QIQGbL97bKA8VA8nmMc-GANpNr&usqp=CAc',
              title: 'Dresses',
              description: 'apparel, clothing, an outer garment (as for a woman or girl) usually consisting of a one-piece bodice and skirt, covering, adornment, or appearance appropriate or peculiar to a particular time.',
              creator: 'Robiat Abdulazeez',
              type: 'Fashion',
              tags: ['ladies','Men','Kids']
            };

            contentItem1= {
              id: 2,
              imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0bvRjM3A0ud0WMBJAWlB7en5lBYMhtUa3sOMaons5iWmG-ud9sSyZzdv73PiEbqXksU&usqp=CAU',
              title: 'Shoes',
              description: 'shoe, one of a matching pair of coverings shaped to fit the foot, esp one ending below the ankle, having an upper of leather, plastic, etc, on a sole and heel of heavier leather, rubber, or synthetic material.',
              creator: 'Robiat Abdulazeez',
              type: 'Fashion',
              tags: ['ladies','Men','Kids']
            };
            contentItem2=   {
                id: 3,
                imgURL:'',
                title: 'Bags',
                description: 'a container made of flexible material with an opening at the top, used for carrying things.',
                creator: 'Robiat Abdulazeez',
                type: 'Fashion',
                tags: ['ladies','Men','Kids']
              };
              contentItem3= {
              id: 4,
              imgURL:'',
              title: 'Cap',
              description: 'a head covering. especially one that has a visor and no brim, something that serves as a cover or protection for something. a bottle ',
              creator: 'Robiat Abdulazeez',
              type: 'Fashion',
              tags: ['ladies','Men','Kids']
            };
            contentItem4= {
              id: 5,
              imgURL:'data:image/jpeg;base64,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',
              title: 'House',
              description: 'A beautiful big mansion.',
              creator: 'Robiat Abdulazeez',
              type: 'Mansion',
              tags: ['Houses','Homes']
            };
            contentItem5=   {
              id: 6,
              imgURL:'data:image/jpeg;base64,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',
              title: 'Pancakes',
              description: 'Home Made Pancakes',
              creator: 'Robiat Abdulazeez',
              type: 'Food',
              tags: ['Food','Ingredients']
            };
            contentItem6= {
              id: 7,
              imgURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawTlAgv73Y0aBin5dEjNOCG8o9FLdXAA1kA&usqp=CAU',
              title: 'Smartphone',
              description: 'A Samsung Galaxy Smartphone',
              creator: 'Robiat Abdulazeez',
              // type: 'Electronics',
              tags: ['tech','Gadgets']
            };
  

  ngOnInit(): void {
    
    this.contentItems =[this.contentItem, this.contentItem1, this.contentItem2, this.contentItem3, this.contentItem4, this.contentItem5, this.contentItem6]
     
  }
 
}