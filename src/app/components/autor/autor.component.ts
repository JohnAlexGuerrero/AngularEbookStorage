import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { PageComponent } from '../page/page.component';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [
    PageComponent
  ],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent implements OnInit{
  author: Author | undefined;

  constructor(
  ){}
  
  ngOnInit():void {
    console.log(this.author);
  }

}
