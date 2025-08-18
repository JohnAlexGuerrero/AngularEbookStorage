import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { LocalDataStorageService } from '../../services/local-data-storage.service';
import { PageComponent } from '../page/page.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
  ],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent implements OnInit{
  dataset: Book[] = [];
  valor: any;
  categories: string[] = [
    "fantastico", "terror", "amor", "drama"
  ];

  constructor(
    private router: Router,
    private dataLocalService: LocalDataStorageService
  ){}

  ngOnInit():void{
    this.dataLocalService.getDatasetBooks();
    this.dataset = this.dataLocalService.dataset_books;

  }

  // Método para rederigir el detalle del libro
  goToBookDetail(id: string):void{
    this.dataLocalService.setDataBookByID(id);
    this.router.navigate([`libros/${id}`]);
  }

  goToAuthor(id: string): void{
    var result = this.dataset.find(el => el.id == id);
    result?.authors.forEach(el => {
      this.dataLocalService.authorObj = {...el};
      console.log(el);
    })
  }

}
