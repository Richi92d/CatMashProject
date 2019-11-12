import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { VoteComponent } from './vote/vote.component';
import { CatNotFoundComponent } from './cat-not-found/cat-not-found.component';


const routes: Routes = [
  { path: 'cat', component: CatComponent },
  { path: 'vote', component: VoteComponent },
  {
    path: '',
    redirectTo: '/cat',
    pathMatch: 'full'
  },
  { path: '**', component: CatNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
