import { Injectable } from '@angular/core';
import { librosDataSet } from '../data/dataset';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = librosDataSet;


  constructor() { }

  getBookDetail(id: string) {
    return this.books.find(el => el._id == id);
  }



}
