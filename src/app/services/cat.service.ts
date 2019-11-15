import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat, CatList } from '../model/cat';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  public _url: string = "/assets/data/catList.json";
  catVote: Cat[] = [];

  constructor(private http: HttpClient) { }

  getCats(): Observable<CatList> {
    return this.http.get<CatList>(this._url).pipe(
      tap((catList: CatList) => {
        if (this.catVote.length === 0) {
          this.catVote = catList.images;
        }
      })
    )
  }
}
