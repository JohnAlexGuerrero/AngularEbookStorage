import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface ColumnConfig {
  columns: number;
  layoutName: string;
}

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatGridListModule,
],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);
  private breakpointState = toSignal(
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).pipe(
      map(state => {
        if (state.breakpoints[Breakpoints.XSmall]) return 'XSmall';
        if (state.breakpoints[Breakpoints.Small]) return 'Small';
        if (state.breakpoints[Breakpoints.Medium]) return 'Medium';
        return "Large";
      })
    ),
    { initialValue: "Large" }
  );

  columnsConfig = computed<ColumnConfig>(() => {
    const currentBreakpoint = this.breakpointState();

    switch (currentBreakpoint) {
      case 'XSmall':
        // Pantallas muy pequeñas (Móvil)
        return { columns: 2, layoutName: 'Mobile' }; 
      case 'Small':
        // Pantallas pequeñas (Tableta)
        return { columns: 3, layoutName: 'Tablet' };
      case 'Medium':
        // Pantallas medianas (Laptop)
        return { columns: 4, layoutName: 'Desktop' };
      case "Large":
      default:
        // Pantallas grandes (Desktop)
        return { columns: 4, layoutName: 'Desktop' };
    }
  });


  generateRandomHeight(min: number, max: number): number {
    // Aseguramos que 'min' y 'max' sean enteros para el propósito de este ejemplo
    const minEntero = Math.ceil(min);
    const maxEntero = Math.floor(max);
  
    // Fórmula: Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (maxEntero - minEntero + 1)) + minEntero;
}

  tiles: Tile[] = [
    {text:'One', cols:1, rows:2, color: '#f44336'},
    {text:'Two', cols:1, rows:3, color: '#e91e63'},
    {text:'Three', cols:1, rows:2, color: '#9c27b0'},
    {text:'Four', cols:1, rows:4, color: '#f7dfdfff'},
    {text:'One', cols:1, rows:2, color: '#f44336'},
    {text:'Two', cols:1, rows:3, color: '#e91e63'},
    {text:'Three', cols:1, rows:2, color: '#9c27b0'},
    {text:'Four', cols:1, rows:3, color: '#673ab7'},
    {text:'One', cols:1, rows:2, color: '#f44336'},
    // {text:'Two', cols:1, rows:2, color: '#e91e63'},
    {text:'Three', cols:1, rows:2, color: '#9c27b0'},
    // {text:'Four', cols:1, rows:3, color: '#673ab7'},
    // {text:'Two', cols:1, rows:3, color: '#e91e63'},
    // {text:'Three', cols:1, rows:2, color: '#9c27b0'},
    // {text:'Four', cols:1, rows:3, color: '#673ab7'},
    // {text:'One', cols:2, rows:2, color: '#f44336'},
    // {text:'Two', cols:1, rows:3, color: '#e91e63'},
    // {text:'Three', cols:1, rows:2, color: '#9c27b0'},
    // {text:'Four', cols:1, rows:3, color: '#673ab7'},
  ];
  books: Book[] = [];
  valor: any;

  constructor(
    private router: Router,
    private bookService: BookService
  ){}

  ngOnInit():void{
    // this.dataLocalService.getDatasetBooks();
    // this.dataset = this.dataLocalService.dataset_books;
    this.books = this.bookService.books;
  }

  // // Método para rederigir el detalle del libro
  // goToBookDetail(id: string):void{
  //   // this.dataLocalService.setDataBookByID(id);
  //   this.router.navigate([`libros/${id}`]);
  // }

  goToBookDetail(slug: string) {
    this.bookService.getBookDetail(slug);
    console.log("object");
  }


}
