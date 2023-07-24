import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchPhotosData } from '../models/fetch-photos.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class FetchPhotosService {
  constructor(private http: HttpClient) {}

  getPhotosAndData(): Observable<FetchPhotosData> {
    console.log("getPhotosData")
    const url =
      'https://backend.aukro.cz/backend-web/api/offers/searchItemsCommon?page=0&size=60';

    const body = {
      categorySeoUrl: 'sberatelstvi',
      fallbackItemsCount: 12,
      splitGroupKey: 'listing',
      splitGroupValue: 'A18',
    };
    console.log("getPhotosDataAfter")

    return this.http.post<FetchPhotosData>(url, body)
  }
}
