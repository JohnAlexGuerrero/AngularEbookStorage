import { Component, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EBook } from '../../models/book';
import { BookService } from '../../services/book.service';
import { PageComponent } from '../page/page.component';
import { TabsComponent } from '../tabs/tabs.component';
import { MatIconModule } from '@angular/material/icon';
import { Page } from '../../models/page';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    RouterLink,
    TabsComponent,
    MatIconModule
],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit{
  book?: EBook;

  // En book-details.component.ts definiendo las pestañas
  bookTabs = [
    { title: 'Sinopsis', id: 'info' },
    { title: 'Autor', id: 'author' },
    { title: `Tabla de contenido (4)`, id: 'tableOfContent' }
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
      // Parts of Book
      //this.bookTabs.push({ title: `Tabla de contenido (4)`, id: 'tableOfContent' });
    }
  }


  get bookRating(): boolean[]{
    var rating: boolean[] = [];
    var index = 1;
    while (Number(this.book!.rating )> index) {
      rating.push(true);
      index ++;
    } 
    while (rating.length < 5) {
      rating.push(false);
    }
    return rating;
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
