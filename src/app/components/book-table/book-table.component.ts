import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-table',
  standalone: true,
  imports: [],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.css'
})
export class BookTableComponent implements OnInit{
  dataset: any[] = [];
  
  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    // this.bookService.getAllEbooks().then(
    //   res => this.dataset = res
    // );
  }

}
