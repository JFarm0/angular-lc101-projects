import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
    title = '28.7. Exercises: Angular, Lesson 1';
  constructor() { }

  ngOnInit() {
  }

}