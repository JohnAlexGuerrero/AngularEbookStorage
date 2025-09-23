import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { LibrosComponent } from '../libros/libros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LibrosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  books: any[] = [];


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.books = this.bookService.books;

  }



}
