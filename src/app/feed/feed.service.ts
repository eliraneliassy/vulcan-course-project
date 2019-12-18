import { db } from './../db';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/item.interface';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  BASE_URL = 'https://api.fashbash.co/api/feed';

  constructor(private httpClient: HttpClient) { }

  getFeed(page: number): Observable<Item[]> {
    let params: HttpParams = new HttpParams();
    params = params.append('page', page.toString());
    // return this.httpClient.get<Item[]>(`${this.BASE_URL}`, { params });
    return of(db);
  }
}
