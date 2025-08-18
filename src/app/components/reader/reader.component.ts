import { Component, OnInit } from '@angular/core';
import { LocalDataStorageService } from '../../services/local-data-storage.service';
import { Page } from '../../models/page';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { ChaptersService } from '../../services/chapters.service';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
  ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css'
})
export class ReaderComponent implements OnInit{
  title: string = "The Secret Garden";
  page: string = 'assets/ebooks/zas/Text/cubierta.xhtml';

  constructor(
    private chaptersService: ChaptersService
  ) {}

  ngOnInit(): void {
  }

  getPageUrl(titleChapter: string): void {
    this.title = titleChapter;

    var result = this.chaptersService.getDataChapters().filter((pag: Page) => pag.title === titleChapter);
    this.page = result[0].content;
    console.log(this.page);
  }

  get titles(): string[] {
    return this.chaptersService.getDataChapters().map((pag: Page)=> pag.title);
  }


}
