import { Injectable } from '@angular/core';
import { librosDataSet } from '../data/dataset';
import { EBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: EBook[] = librosDataSet;


  constructor() { }

  getBookDetail(id: string) {
    return this.books.find(el => el._id == id);
  }



}
