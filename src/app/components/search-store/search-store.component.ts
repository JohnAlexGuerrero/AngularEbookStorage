import { Component, computed, Input } from '@angular/core';
import { BookService } from '../../services/book.service';
import { EBook } from '../../models/book';

@Component({
  selector: 'app-search-store',
  standalone: true,
  imports: [],
  templateUrl: './search-store.component.html',
  styleUrl: './search-store.component.css'
})
export class SearchStoreComponent {
  @Input() books?: EBook[];
  countBooks = computed(() => this.books?.length);

  constructor () {
    console.log('constructor - app-search-store');
  }

  ngOnInit() {
    console.log('ngOnInit app-search-store: ');
  }

}
