import { Component, OnInit } from '@angular/core';
import { Page } from '../../models/page';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { ChaptersService } from '../../services/chapters.service';
import { BookService } from '../../services/book.service';

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
  book: any | undefined;
  title: string = "";
  url: string = '';
  
  constructor(
    private bookService: BookService
  ) {}
  
  ngOnInit(): void {
    this.book = this.bookService.bookCurrent;
    console.log(this.book);
  }

  get pages(): any[] {
    return [];
  }


  selectPage(title: string): void {
    this.title = title;
    // this.url = this.getPageUrl();
    
  }


}
