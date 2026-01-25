import { Component, OnInit, signal, computed } from '@angular/core';
import { BookService } from '../../services/book.service';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { librosDataSet } from '../../data/dataset';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';
import { Book } from '../../models/book';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule, MatIconModule,
    HeaderComponent, CustomSidenavComponent,
    CarouselComponent,
    CommonModule, RouterModule,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  bookList = librosDataSet;
  collapsed = signal(false);

  // Categories
  bestSellers = this.bookList;
  fantasyBooks = this.bookList;

  books?: Book[] = [];


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.books = this.bookService.books;
    console.log(this.bookList);

  }



}
