import { Component, OnInit, signal, computed } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
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


  constructor(
    private threadService: ThreadsService
  ){}

  ngOnInit(): void {
    this.bookList = this.threadService.getDatasetThreads();

  }



}
