import { Component, OnInit } from '@angular/core';
import { FetchPhotosService } from './services/fetch-photos.service';
import { FetchPhotosData, FetchPhotosItemData } from './models/fetch-photos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fetchPhotosService: FetchPhotosService) {}

  fetchedPhotos?: FetchPhotosData;
  randomArrayOfPhotos: FetchPhotosItemData[] = [];
  slicedArray: FetchPhotosItemData[] = [];
  isGrayscaleEnabled: boolean = false;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.fetchPhotosService.getPhotosAndData().subscribe({
      next: (response) => {
        this.fetchedPhotos = response;
        this.getRandomFour(this.fetchedPhotos?.content);
      },
    });
  }

  getRandomFour(array: FetchPhotosItemData[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    this.randomArrayOfPhotos = array;
    this.slicedArray = array.slice(0, 4);
  }

  onSubmit() {
    this.getRandomFour(this.randomArrayOfPhotos);
  }
}
