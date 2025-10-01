import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
  ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit{
  book: Book = {
    id: "", titulo: "", slug:"",sinopsis:"",saga:"",cover:"",active:false, authors: {nombre: "",image:"",bio:""}, pages:[]
  };

  title: string = "";
  urlBase: string = 'http://localhost:4200/assets/ebooks/';
  
  constructor(
    private bookService: BookService
  ) {}
  
  ngOnInit(): void {
    this.book = this.bookService.bookCurrent;
  }

  get pages(): any[] {
    return this.book.pages;
  }


  selectPage(title: string): void {
    this.title = title;
    // this.url = this.getPageUrl();
    
  }


}
