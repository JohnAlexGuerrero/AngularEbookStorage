import { Injectable, Optional } from '@angular/core';
import { librosDataSet } from '../data/dataset';
import { EBook } from '../models/book';
import ePub, { NavItem } from 'epubjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: EBook[] = librosDataSet;
  navigation: NavItem[] = [];


  constructor() { }

  getBookDetail(sku: string) {
    return this.books.find(el => el.sku == sku);
  }

  getEbookOfStorage(url: string) {
    return ePub(url);
  }


  // Guardar la posicion usando el ID del libro como clave 
  savePositionEbook(sku: string, location:any){
    const cfi = location.start.cfi;
    localStorage.setItem(`last-location-${sku}`,cfi);
  }

  getPositionEbook(id: string){
    return localStorage.getItem(`last-location-${id}`);
  }
}
