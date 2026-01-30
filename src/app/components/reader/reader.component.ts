import { Component, ElementRef, Inject, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { BookService } from '../../services/book.service';
// import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { Page } from '../../models/page';
import ePub, { Book, Rendition } from 'epubjs';

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
  @Input() epubUrl: string = ''; // URL del archivo epub
  @ViewChild('viewer', { static: true }) viewerDiv!: ElementRef;


  private book?: Book;
  private rendition?: Rendition;
  public currentProgress: number = 0;
  public bookTitle: string = '';


  currentPage: number = 0;
  
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Aqui se llama al servicio para obtener las paginas
      var ebook = this.bookService.getBookDetail(id);
      this.epubUrl = ebook!.url;
    }

    if (this.epubUrl) {
      this.initialzeReader();
    }

  }

  private initialzeReader(){
    // Si la url empieza con 'assets/', le concatenamos el baseHref
    // Esto transforma 'assets/libro.epub' en '/nombre-repo/assets/libro.epub'
    const fullPath = this.baseHref + this.epubUrl;
    // Instanciar el libro
    this.book = ePub(fullPath);
    // Renderizarlo en el contenedor
    this.rendition = this.book.renderTo(this.viewerDiv.nativeElement, {
      width: '100%',
      height: '100%',
      flow: 'paginated', // Formato libro con páginas
      manager: 'default'
    });
    // Mostar el libro y obtener metadatos
    this.rendition.display();
    
    this.book.loaded.metadata.then(meta => {
      this.bookTitle = meta.title;
      
    });

    // Trackear el progreso location
    this.rendition.on('relocated', (location: any) => {
      this.currentProgress = Math.floor(location.start.percentage * 100);
    });
  }

  // NAvegacion
  prevPage() {this.rendition?.prev();}
  nextPage() {this.rendition?.next();}

  ngOnDestroy():void {
    if (this.book) {
      this.book.destroy(); // Limpieza de memoria
    }
  }


}
