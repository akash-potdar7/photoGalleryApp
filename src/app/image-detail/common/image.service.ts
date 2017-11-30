import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  visibleImages: any[];

  constructor() { }

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImageById(id: number) {
    return IMAGES.slice(0).find(image=>image.id==id)
  }

  getImagesByCategory(category: string) {
    return IMAGES.slice(0).find(image=>image.category==category)
  }

}

//id, category, caption, url
const IMAGES = [
   {
    "id": 1,
    "category": "Rocks",
    "caption": "Something",
    "url": "./assets/img/Desert.jpg"
  },
   {
    "id": 2,
    "category": "Flowers",
    "caption": "Something",
    "url": "./assets/img/Chrysanthemum.jpg"
  },
  {
    "id": 3,
    "category": "Flowers",
    "caption": "Something",
    "url": "./assets/img/Hydrangeas.jpg"
  },
  {
    "id": 4,
    "category": "Animals",
    "caption": "Something",
    "url": "./assets/img/Jellyfish.jpg"
  },
  {
    "id": 5,
    "category": "Animals",
    "caption": "Something",
    "url": "./assets/img/Koala.jpg"
  },
  {
    "id": 6,
    "category": "Rocks",
    "caption": "Something",
    "url": "./assets/img/Lighthouse.jpg"
  },
  {
    "id": 7,
    "category": "Animals",
    "caption": "Something",
    "url": "./assets/img/Penguins.jpg"
  },
  {
    "id": 8,
    "category": "Flowers",
    "caption": "Something",
    "url": "./assets/img/Tulips.jpg"
  }
]