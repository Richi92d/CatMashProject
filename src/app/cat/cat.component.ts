import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { CatList, Cat } from '../model/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  twoCatsArray: Cat[] = [];
  allcats: Cat[];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.showMeTwoCats();
  }

  showMeTwoCats() {
    this.catService.getCats().subscribe((cats: CatList) => {
      this.allcats = cats.images;
      this.twoCatsArray = this.chooseTwoRandomCats(this.allcats);
    });
  }

  chooseTwoRandomCats(cats: Cat[]): Cat[] {
    const firstCatIndex = this.getRandomIndex(cats.length);
    const secondCatIndex = this.getRandomIndex(cats.length, firstCatIndex);

    return [cats[firstCatIndex], cats[secondCatIndex]];
  }

  getRandomIndex(maxValue: number, differentThanValue?: number): number {
    let index: number;
    do {
      index = this.getRandomInt(maxValue);
    } while (index === differentThanValue);
    return index;
  }

   getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  voteForThisCat(id: string) {
    const likedCatindex = this.allcats.findIndex((cat: Cat) => cat.id === id);
    const newRating = this.getIncrementedCatRatingValue(this.catService.catVote[likedCatindex].rating);
    this.catService.catVote[likedCatindex].rating = newRating;
    this.twoCatsArray = this.chooseTwoRandomCats(this.allcats);
  }

  getIncrementedCatRatingValue(rating: number | undefined): number {
    return rating ? ++rating: 1;
  }

}
