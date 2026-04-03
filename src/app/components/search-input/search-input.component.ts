import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { SearchStoreComponent } from '../search-store/search-store.component';
import { CommonModule } from '@angular/common';
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { EBook } from '../../models/book';
import { BookService } from '../../services/book.service';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [
    CommonModule,
    SearchStoreComponent,
    MatFormField, MatLabel, MatIcon, MatHint, MatInputModule,
    ReactiveFormsModule, FormControl
  ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit{
  books: EBook[] = [];

  searchField = new FormControl('', []);

  constructor(
    private bookServices: BookService
  ) {}

  ngOnInit(): void {
    this.books = this.bookServices.books;
  }

  filterBooks() {
    console.log(this.searchField);
  }
}
