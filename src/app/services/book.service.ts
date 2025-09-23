import { Injectable } from '@angular/core';
import { librosDataSet } from '../data/dataset';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: any[] = librosDataSet;
  bookCurrent: any[] = [];

  constructor() { }

  getBookDetail(slug: string) {
    this.bookCurrent = this.books.find(el => el.slug == slug);
  }


}
