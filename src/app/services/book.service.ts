import { Injectable, Optional } from '@angular/core';
import { librosDataSet } from '../data/dataset';
import { EBook } from '../models/book';
import ePub from 'epubjs';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: EBook[] = librosDataSet;


  constructor() { }

  getBookDetail(id: string) {
    return this.books.find(el => el._id == id);
  }

  getEbookOfStorage(url: string) {
    return ePub(url);
  }

  // Navigation of ebook TOC
  getNavigation(url: string): Page[]{
    let response: Page[] = [];

    ePub(url).loaded.navigation.then(toc => {
      toc.toc.forEach(res => {
        const option: Page = {
          id: res.id,
          label:res.label,
          href: res.href,
          subitems: res.subitems,
          parent: res.parent
        }
        response.push(option);
      });
    });
    return response;
  }

  // Guardar la posicion usando el ID del libro como clave 
  savePositionEbook(id: string, location:any){
    const cfi = location.start.cfi;
    localStorage.setItem(`last-location-${id}`,cfi);
  }

  getPositionEbook(id: string){
    return localStorage.getItem(`last-location-${id}`);
  }
}
