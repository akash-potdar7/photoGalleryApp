import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photosFilter'
})
export class PhotosFilterPipe implements PipeTransform {

  constructor() {
    console.log('PhotosFilterPipe')
  }

  transform(items: any[], criteria: string): any {
    console.log("Got in Pipe, criteria= " + criteria);
    if(criteria === 'all') {
      return items;
    } else {
       return items.filter(item=> {return item.category === criteria});
    }
  }

}