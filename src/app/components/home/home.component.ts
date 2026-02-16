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
import { EBook } from '../../models/book';
import { ThreadsService } from '../../services/threads.service';


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
  bookList:any[] = [];
  // collapsed = signal(false);

  // Categories
  bestSellers = this.bookList;
  fantasyBooks = this.bookList;

  books?: EBook[] = [];


  constructor(
    private bookService: BookService,
    private threadService: ThreadsService
  ){}

  ngOnInit(): void {
    this.bookList = this.threadService.getDatasetThreads();
    console.log(this.bookList);

  }



}
