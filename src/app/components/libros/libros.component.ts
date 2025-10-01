import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  books: Book[] = [];
  valor: any;

  constructor(
    private router: Router,
    private bookService: BookService
  ){}

  ngOnInit():void{
    // this.dataLocalService.getDatasetBooks();
    // this.dataset = this.dataLocalService.dataset_books;
    this.books = this.bookService.books;
  }

  // // Método para rederigir el detalle del libro
  // goToBookDetail(id: string):void{
  //   // this.dataLocalService.setDataBookByID(id);
  //   this.router.navigate([`libros/${id}`]);
  // }

  goToBookDetail(slug: string) {
    this.bookService.getBookDetail(slug);
    console.log("object");
  }


}
