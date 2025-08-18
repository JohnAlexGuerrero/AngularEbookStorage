import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { FirebaseService } from './firebase.service';
import { Observable, of } from 'rxjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class LocalDataStorageService {
  dataset_books: Book[] = [];
  dataset_chapters: Page[] = [];
  dataset_authors: Author[] = [];
  bookObj: Book | undefined;
  authorObj: Author | undefined;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  // Books
  getDatasetBooks():void{
    this.firebaseService.getDataCollection("ebooks");
    this.dataset_books = this.firebaseService.dataset;
    // console.log(this.dataset_books);
  }

  // Pages
  
  // Método para obtener la información de la base de datos de un libro por su ID
  setDataBookByID(id: string):void{
    var response = this.dataset_books.find(el => el.id === id);
    this.bookObj = {
      id: id,
      title: response?.title || '',
      synopsis: response?.synopsis || '',
      imageUrl: response?.imageUrl || '',
      title_origin: response?.title_origin || '',
      saga: response?.saga || '',
      authors: response?.authors || [],
    }
    console.log(response);
    console.log(this.dataset_books);
  }
  
  // Método par filtrar los capitulos, según el ID del ebook
  setDataChaptersByBookID(id: string):void {
    this.firebaseService.getDataQueryByID("chapters", id);
    
    this.dataset_chapters = this.firebaseService.dataset;
    // console.log("chapters: "+ this.dataset_chapters[0]);
  }

  getDataChapters(): Page[] {
    if (this.dataset_chapters.length === 0) {
      this.firebaseService.getDataQueryByID("chapters", this.bookObj?.id || '');
      this.dataset_chapters = this.firebaseService.dataset;
    }
    return this.dataset_chapters;
  }
  
  
  // Authors
  getDataSetAuthors():void{
    this.dataset_books.forEach(element => {
      element.authors.forEach(el => this.dataset_authors.push(el));
    })
  }

  // Método para obtener un autor por su ID
  // getAuthorById(id: string){
  //   if (this.dataset_authors.length === 0){
  //     this.getDataSetAuthors();
  //     console.log("size dataset_authors: " + this.dataset_authors.length);
  //   }
  //   console.log(this.dataset_authors.filter(el => el.id === id) + " desde local storage author");
  //   return this.dataset_authors.filter(el => el.id === id)[0];
  // }

  // Observable para obtener los datos del autor
  getDataOfAuthor(nameAuthor: string):void {
    this.getDataSetAuthors();

    var result = this.dataset_authors.filter(el => el.name.includes(nameAuthor));
    console.log(result);

    result.forEach(el => {
      if (el.descriptionUrl != null) {
        this.authorObj = {...el};
      }
    })
  }
}
