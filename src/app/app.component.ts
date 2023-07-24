import { Component, OnInit } from '@angular/core';
import { FetchPhotosService } from './services/fetch-photos.service';
import { FetchPhotosData } from './models/fetch-photos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fetchPhotosService: FetchPhotosService) {}

  fetchedPhotos?: FetchPhotosData;
  randomArrayOfPhotos: any[] = [];
  slicedArray: any[] = [];
  isGrayscaleEnabled: boolean = false;

  ngOnInit(): void {
    console.log("oninit")
    this.getData();
  }

  getData() {
    console.log("getData")
    this.fetchPhotosService.getPhotosAndData().subscribe({
      next: (response) => {
        console.log("next")
        this.fetchedPhotos = response;
        console.log(response)
        this.getRandomFour(this.fetchedPhotos?.content);
      },
    });
  }

  getRandomFour(array: Array<any>) {
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
