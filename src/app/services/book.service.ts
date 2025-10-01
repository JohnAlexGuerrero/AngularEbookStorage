import { Injectable } from '@angular/core';
import { librosDataSet } from '../data/dataset';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = librosDataSet;
  bookCurrent: Book = {
    id: "", titulo: "", slug:"",sinopsis:"",saga:"",cover:"",active:false, authors: {nombre: "",image:"",bio:""}, pages:[]
  };

  constructor() { }

  getBookDetail(slug: string) {
    this.bookCurrent = this.books.find(el => el.slug == slug);
  }


}
