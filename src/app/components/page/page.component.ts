import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit{
  @Input() url: string = "";
  htmlContent: string = "";
  
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getContentHtml().subscribe(
      data => {
        this.htmlContent = data;
        console.log(this.htmlContent);
        console.log(this.url);
      },
      error => {
        console.log("Error al obtener el html: ", error);
      }
    );
  }

  getContentHtml(): Observable<string> {
    return this.http.get(`${this.url}`, { responseType: 'text'});
  }



}

