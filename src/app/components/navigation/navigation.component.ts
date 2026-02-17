import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { NavItem } from 'epubjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit{
  @Input() set book(bookInstance: any){
    if(bookInstance){
      this._book = bookInstance;
      this.loadNavigation();
    }
  };
  private _book: any;
  @Input() rendition: any;

  isOpen: boolean = false;
  navigation: NavItem[] = [];


  constructor(
    private bookService: BookService
  ){}

  ngOnInit(): void {
  }
  
  loadNavigation(){
    this._book.loaded.navigation.then((nav: any)=> {
      this.navigation = nav.toc;
    });
  }

  navigateTo(href: string): void{
    // navega a la seccion del libro y cierra el menu
    this.rendition.display(href);
    this.isOpen = false;
  }

  toggleMenu():void {
    this.isOpen = !this.isOpen;
  }


}
