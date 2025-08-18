import { Component, OnInit } from '@angular/core';
import { AutorComponent } from '../autor/autor.component';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Author } from '../../models/author';
import { CommonModule } from '@angular/common';
import { LocalDataStorageService } from '../../services/local-data-storage.service';
import { Book } from '../../models/book';
import { PageComponent } from '../page/page.component';
import { ChaptersService } from '../../services/chapters.service';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [
    PageComponent,
    CommonModule,
  ],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit{
  book: Book | undefined;

  constructor(
    private router: Router,
    private dataLocalStorage: LocalDataStorageService,
    private chaptersService: ChaptersService
  ){}

  ngOnInit():void {
    this.book = this.dataLocalStorage.bookObj;
    
  }
  

  // Método para rederincionar a home de libros
  goToListBooks():void{
    this.router.navigate(["libros"]);
  }

  goToAuthor():void {
    console.log("click <a> autor");
  }

  // Funcion para empezar a leer
  startReading():void {
    
    // this.router.navigate([`libros/lector/${this.book.id}`]);
  }

  // Método para empezar a leer un libro
  async readBook():Promise<void> {
    await this.chaptersService.setChaptersByBook(this.book?.id || '');
    this.router.navigate([`book/reader/${this.chaptersService.id}`]);
  }

}
