import { Component, ElementRef, Inject, Input, OnInit, Optional, ViewChild, viewChild } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { PageComponent } from '../page/page.component';
import { BookService } from '../../services/book.service';
// import { Book } from '../../models/book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Page } from '../../models/page';
import ePub, { Book, Rendition } from 'epubjs';
import Pagelist from 'epubjs/types/pagelist';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    RouterLink
  ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css',
  providers: [{provide: APP_BASE_HREF, useValue: '/johnalexguerrero.github.io/AngularEbookStorage'}]

})
export class ReaderComponent implements OnInit{
  @Input() epubUrl: string = ''; // URL del archivo epub
  @ViewChild('viewer', { static: true }) viewerDiv!: ElementRef;


  private book?: Book;
  private rendition?: Rendition;
  public currentProgress: number = 0;
  public bookTitle: string = '';
  public id: string = "";
  public navigation: Page[] = [];


  currentPage: number = 0;
  
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Aqui se llama al servicio para obtener las paginas
      var ebook = this.bookService.getBookDetail(id);
      this.epubUrl = ebook!.url;
      this.id = id;
    }

    if (this.epubUrl) {
      this.initialzeReader();
    }
  }

  private initialzeReader(){
    // Instanciar el libro
    this.book = this.bookService.getEbookOfStorage(this.epubUrl);

    // Obtener navegacion del libro
    this.navigation = this.bookService.getNavigation(this.epubUrl);
    console.log(this.navigation);

    // Renderizarlo en el contenedor
    this.rendition = this.book.renderTo(this.viewerDiv.nativeElement, {
      width: '100%',
      height: '100%',
      flow: 'paginated', // Formato libro con páginas
      manager: 'default',
    });
    // Intentamos obtener la ultima posicion guarda
    const saveLocation = this.bookService.getPositionEbook(this.id);

    if (saveLocation) {
      this.rendition.display(saveLocation);
      console.log(saveLocation);
    }else{
      // Mostar el libro y obtener metadatos
      this.rendition.display();
    }
    
    this.book.loaded.metadata.then(meta => {
      this.bookTitle = meta.title;
    });

    
    // Trackear el progreso location
    this.rendition.on('relocated', (location: any) => {
      // Llamanos el servicio para guardar la posicion actual del libro
      this.bookService.savePositionEbook(this.id, location);
      // this.currentProgress = Math.floor(location.start.display.page * 100);
      // const percent = this.book?.locations.percentageFromCfi(location.start.cfi);
      // const percentageLabel = Math.floor(percent * 100);
      console.log(`El usuario está en el ${location.start.displayed.page}% del libro`);
      console.log("CFI de inicio:", location.start.cfi);
      console.log("CFI de fin:", location.end.cfi);
      
      // Si ya generaste las locaciones (ver punto 2), 
      // puedes obtener el número de página relativo:
      console.log("Página actual:", location.start.displayed.page);
      console.log("Total páginas:", location.start.displayed.total);
    });
  }

  // NAvegacion
  prevPage() {this.rendition?.prev();}
  nextPage() {this.rendition?.next();}
  jumpPage() {console.log(this.book?.spine.first())};

  ngOnDestroy():void {
    if (this.book) {
      this.book.destroy(); // Limpieza de memoria
    }
  }


}
