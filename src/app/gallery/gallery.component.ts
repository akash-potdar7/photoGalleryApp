import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos: string = 'Recent Photos';
  visiblePhotos: Array<any> = [];

  constructor(private imageService: ImageService) { 
    this.visiblePhotos = imageService.getImages();
  }

  ngOnInit() {
  }

}
