import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ImageService } from '../image-detail/common/image.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Pipe } from '@angular/core/src/metadata/directives';
import { PhotosFilterPipe } from '../image-detail/common/photos-filter.pipe';
import { Http } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  inputs: ['nameG'],
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, DoCheck, OnChanges {

  photos: string = 'Recent Photos';
  visiblePhotos: any = [];
  category: string;
  filterBy: string = 'all';

  constructor(private imageService: ImageService, http: Http) {
    this.visiblePhotos = imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.visiblePhotos = this.imageService.getImages();
  }

  ngDoCheck(): void {
    let flag = false;
    let photos = this.visiblePhotos;
    photos.forEach(element => {
      if (this.category === '' || this.category === null || this.category === undefined) {
        this.filterBy = 'all';
        flag = true;
      } else if (this.category === element.category) {
                  this.filterBy = this.category;
                  flag = true;
                }
    });
    if (flag) {
      let filterRes = new PhotosFilterPipe().transform(photos, this.filterBy);
      this.visiblePhotos = filterRes;
    }
  }

  doThis(imageDetail: any) {
    console.log('doThis()');
    console.log(imageDetail);
  }

}