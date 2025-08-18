import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafo',
  standalone: true,
  imports: [],
  templateUrl: './parrafo.component.html',
  styleUrl: './parrafo.component.css'
})
export class ParrafoComponent {
  @Input() body = "";
}
