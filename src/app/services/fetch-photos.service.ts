import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FetchPhotosData } from '../models/fetch-photos.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchPhotosService {
  private baseUrl = 'https://backend.aukro.cz';

  constructor(private http: HttpClient) {}

  getPhotosAndData(): Observable<FetchPhotosData> {
    const url = `${this.baseUrl}/backend-web/api/offers/searchItemsCommon?page=0&size=60`;

    const body = {
      categorySeoUrl: 'sberatelstvi',
      fallbackItemsCount: 12,
      splitGroupKey: 'listing',
      splitGroupValue: 'A18',
    };

    return this.http.post<FetchPhotosData>(url, body);
  }
}
