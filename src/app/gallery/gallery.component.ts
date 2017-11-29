import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ImageService } from '../service/image.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Pipe } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
 

  photos: string = 'Recent Photos';
  visiblePhotos: Array<any> = [];

  @Input() filterBy?: string = 'all';

  constructor(private imageService: ImageService) {
    this.visiblePhotos = imageService.getImages();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("GalleryComponent.ngOnChanges()");
    this.visiblePhotos = this.imageService.getImages();
  }

  filter() {
    console.log('3');
    this.filterBy=='Animals';
  }

}