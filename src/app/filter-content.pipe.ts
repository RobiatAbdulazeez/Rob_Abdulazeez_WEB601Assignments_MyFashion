import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'filterContent',
  standalone: true
})
export class FilterContentPipe implements PipeTransform {

  transform(contents: Content[], type?: string): Content[] {
    if(type){
      return contents.filter(content => content.type === type);
    } else {
      //if no type is specifired, filter for contents without a type
      return contents.filter(contents => !contents.type);
    }
  }

}
