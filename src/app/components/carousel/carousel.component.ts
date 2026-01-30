import { Component, Input, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EBook } from '../../models/book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookThumbnailComponent } from '../book-thumbnail/book-thumbnail.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    BookThumbnailComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy{
  @Input() books: EBook[] = [];
  @Input() title: string = "Novedades";

  @ViewChild('carouselContent') carouselContent!: ElementRef;

  scroll(direction: number){
    // Desplaza 300px a la izquierda o derecha
    this.carouselContent.nativeElement.scrollBy({
      left: direction * 300,
      behavior: 'smooth'
    });
  }
  
  currentIndex: number = 0 // Indice del libro actual
  private autoPlayInterval: any;

  constructor(
    // private service: LocalDataStorageService,
    private router: Router
  ) {}
  
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

  

}
