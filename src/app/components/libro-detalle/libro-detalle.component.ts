import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { PageComponent } from '../page/page.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    RouterLink,
    TabsComponent
],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit{
  book?: Book;

  // En book-details.component.ts definiendo las pestañas
  bookTabs = [
    { title: 'Sinopsis', id: 'info' },
    { title: 'Autor', id: 'author' },
    { title: 'Reseñas', id: 'reviews' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ){}

  ngOnInit():void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      // Aqui se llama al servicio
      this.book = this.bookService.getBookDetail(id);
      console.log(this.book);
    }
    // this.book = this.bookService.bookCurrent;
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
