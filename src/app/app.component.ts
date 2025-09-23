import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Book } from './models/book';
import { LibrosComponent } from './components/libros/libros.component';
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
  books: Book[] = [];

  constructor (
  ){}

  ngOnInit(): void {
    console.log(this.books);
  }
}
