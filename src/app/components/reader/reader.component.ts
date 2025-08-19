import { Component, OnInit } from '@angular/core';
import { LocalDataStorageService } from '../../services/local-data-storage.service';
import { Page } from '../../models/page';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { ChaptersService } from '../../services/chapters.service';
import { TableContentComponent } from '../table-content/table-content.component';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent, TableContentComponent,
  ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit{
  title: string = "cubierta";
  url: string = '';

  constructor(
    private chaptersService: ChaptersService
  ) {}

  ngOnInit(): void {
    
  }

  get pages(): Page[] {
    return this.chaptersService.getDataChapters();
  }

  get titles(): string[] {
    return this.chaptersService.getDataChapters().map((pag: Page)=> pag.title);
  }

  selectPage(title: string): void {
    this.title = title;
    // this.url = this.getPageUrl();
    
  }


}
