import { Routes } from '@angular/router';
import { ParrafoComponent } from './components/parrafo/parrafo.component';
import { CapituloComponent } from './components/capitulo/capitulo.component';
import { AutorComponent } from './components/autor/autor.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { PageComponent } from './components/page/page.component';
import { ReaderComponent } from './components/reader/reader.component';

export const routes: Routes = [
    {path: 'libros', component: LibrosComponent, title: 'libros'},
    {path: 'book/:id', component: LibroDetalleComponent, title: 'libro-detalle'},
    {path: 'book/reader/:id', component: ReaderComponent, title: 'contenido'},
    {path: 'autor/:name-author', component: AutorComponent, title: 'autor-detail'},

    // {path: 'libros/lector/:id', component: ReaderComponent, title: 'lector'},
];
