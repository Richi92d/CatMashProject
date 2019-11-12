import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat, CatList } from '../model/cat';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  catVote: Cat[] = [];

  constructor(private http: HttpClient) { }

  getCats(): Observable<CatList> {
    return this.http.get<CatList>('http://localhost:8080/cats').pipe(
      tap((catList: CatList) => {
        if (this.catVote.length === 0) {
          this.catVote = catList.images;
        }
      })
    )

  }












}
