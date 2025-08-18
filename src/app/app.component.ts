import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LocalDataStorageService } from './services/local-data-storage.service';
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarouselComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  books: Book[] = [];

  constructor (
    private dataLocalStorageService: LocalDataStorageService
  ){}

  ngOnInit(): void {
    this.dataLocalStorageService.getDatasetBooks();
    this.books = this.dataLocalStorageService.dataset_books;
    console.log(this.books);
  }
}
