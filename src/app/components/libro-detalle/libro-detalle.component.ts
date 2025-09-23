import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { ChaptersService } from '../../services/chapters.service';
import { BookService } from '../../services/book.service';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    RouterLink
],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit{
  book: any | undefined;

  constructor(
    private router: Router,
    private bookService: BookService
  ){}

  ngOnInit():void {
    this.book = this.bookService.bookCurrent;
    console.log(this.book);
  }
  

  // Método para rederincionar a home de libros
  goToListBooks():void{
    this.router.navigate(["libros"]);
  }

  goToReaderBook():void {
    console.log("object");
  }

  goToAuthor():void {
    console.log("click <a> autor");
  }

  // Funcion para empezar a leer
  startReading():void {
    
    // this.router.navigate([`libros/lector/${this.book.id}`]);
  }



}
