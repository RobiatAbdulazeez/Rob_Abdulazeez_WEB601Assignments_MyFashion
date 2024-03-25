import { Content } from "./content-interface";
 export class ContentList {

    //A private array of type Content
    private contentArray: Content[];


    //A constructor that initially sets the array to be empty
    constructor(){
        this.contentArray = [];
    }
    //A getter function that returns your Content array
    getItems() : Content[] {
        return this.contentArray;
    }
    //function that adds content to the end of the array
    addItem(item : Content){
        return this.contentArray.push(item)
    }

    //A function that returns the number of items in the array
    numberOfItems():number{
        return this.contentArray.length;
    }

//A function that takes an input of an index of the array and returns a reader-friendly html
//output of a Content 
displayInput(input : number){
    //creating a variable contentItem that displays the content of the index number entered
    var contentItem = this.contentArray[input];

    //if a number that is less than 0 or greather than the length of the array is entered 
    if(input < 0 || input>=this.contentArray.length){
        return "Invalid index ,Not a content list item";
    }
//question here why curly braces in the example used in class
    return  `
    <img src= ${contentItem.imgURL} alt="">
<h2>Title: ${contentItem.title}</h2>
<p>Descripton: ${contentItem.description}</p>
<p>Creator: ${contentItem.creator}</p>
<p>Type: ${contentItem.type}</p>
    ` ;
}
}