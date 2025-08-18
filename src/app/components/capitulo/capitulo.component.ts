import { Component, Input } from '@angular/core';
import { ParrafoComponent } from '../parrafo/parrafo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capitulo',
  standalone: true,
  imports: [
    ParrafoComponent,
    CommonModule
  ],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css'
})
export class CapituloComponent {
  @Input() paragraphs = [];
  @Input() handleChapter = false;

  

  // Método para manejar la visualización del capitulo
  handleRead():void{
    this.handleChapter = !this.handleChapter;
  }

}
