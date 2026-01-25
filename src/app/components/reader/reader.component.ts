import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../models/page';

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
  pages?: Page[]; //Contenido del libro por paginas
  bookTitle: string = "";
  pageTitle: string = "";
  contentPage: string = "";

  currentPage: number = 0;
  
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Aqui se llama al servicio para obtener las paginas
      var book = this.bookService.getBookDetail(id);
      this.pages = book?.pages;
      this.bookTitle = book!.title;
    }

    if (this.currentPage == 0) {
      this.pageTitle = this.pages![0].title;
      this.contentPage = this.pages![0].content;
    }

  }

  nextPage(){
    if (this.currentPage < this.pages!.length - 1) {
      this.currentPage ++;
      this.getCurrentPage();
    }
  }

  prevPage(){
    if (this.currentPage > 0) {
      this.currentPage --;
      this.getCurrentPage();
    }
  }

  get progress(): number{
    return ((this.currentPage + 1) / this.pages!.length) * 100;
  }

  getCurrentPage(){
    this.pageTitle = this.pages![this.currentPage].title;
    this.contentPage = this.pages![this.currentPage].content;
  }

}
