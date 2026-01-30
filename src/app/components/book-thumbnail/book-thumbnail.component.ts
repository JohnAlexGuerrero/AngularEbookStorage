import { Component, Input, OnInit } from '@angular/core';
import { EBook } from '../../models/book';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-book-thumbnail',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './book-thumbnail.component.html',
  styleUrl: './book-thumbnail.component.css'
})
export class BookThumbnailComponent implements OnInit{
  @Input() book!: EBook; //Recibe el objeto libro

  ngOnInit(): void {
  }

}
