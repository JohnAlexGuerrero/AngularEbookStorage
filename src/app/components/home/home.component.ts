import { Component, OnInit, signal, computed } from '@angular/core';
import { BookService } from '../../services/book.service';
import { LibrosComponent } from '../libros/libros.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LibrosComponent, 
    MatSidenavModule, MatIconModule,
    HeaderComponent, CustomSidenavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  collapsed = signal(false);

  width = computed(()=> (this.collapsed() ?  60 : 250));
  books: any[] = [];


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.books = this.bookService.books;

  }



}
