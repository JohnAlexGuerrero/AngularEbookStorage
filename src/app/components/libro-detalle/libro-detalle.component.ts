import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
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
  book: Book = {
    id: "", titulo: "", slug:"",sinopsis:"",saga:"",cover:"",active:false, authors: {nombre: "",image:"",bio:""}, pages:[]
  };

  constructor(
    private router: Router,
    private bookService: BookService
  ){}

  ngOnInit():void {
    this.book = this.bookService.bookCurrent;
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
