import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Soul', 'Oceans 8', 'Fight Club', 'Thor: Ragnarok'];

   constructor() { }

   ngOnInit() {
   }

}
