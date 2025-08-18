import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { LocalDataStorageService } from '../../services/local-data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy{
  @Input() slides: Book[] = [];
  @Input() interval: number = 5000;
  @Input() autoPlay: boolean = true;
  
  currentIndex: number = 0 // Indice del libro actual
  private autoPlayInterval: any;

  constructor(
    private service: LocalDataStorageService,
    private router: Router
  ) {}
  
  ngOnDestroy(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }
  ngOnInit(): void {
    this.stopAutoPlay();
  }

  goToPrevius():void{
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.resetAutoPlay();
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.resetAutoPlay();
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    this.currentIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.resetAutoPlay();
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetAutoPlay();
  }

  private startAutoPlay(): void {
    this.stopAutoPlay(); // Asegura que solo hay un intervalo corriendo
    this.autoPlayInterval = setInterval(() => {
      this.goToNext();
    }, this.interval);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay(): void {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  onSlideClick(id: string): void {
    this.router.navigate([`book/${id}`]);
    this.service.setDataBookByID(id);
    console.log("Book ID clicked: ", id);
  }
}
