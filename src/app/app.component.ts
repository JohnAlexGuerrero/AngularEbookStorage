import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EBook } from './models/book';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  books: EBook[] = [];

  constructor (
  ){}

  ngOnInit(): void {
    console.log(this.books);
  }
}
