import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(public catService: CatService) { }

  ngOnInit() {
  }

}
