import { Routes } from '@angular/router';
import { AutorComponent } from './components/autor/autor.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { ReaderComponent } from './components/reader/reader.component';
import { HomeComponent } from './components/home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

export const routes: Routes = [
    {path: 'books', component: HomeComponent, title:'home'},
    {path: 'books/search', component: SearchInputComponent, title: 'search-input'},
    {path: 'books/:id', component: LibroDetalleComponent, title: 'libro-detalle'},
    {path: 'books/reader/:id', component: ReaderComponent, title: 'reader'},
    {path: 'autor/:name-author', component: AutorComponent, title: 'autor-detail'},

];
