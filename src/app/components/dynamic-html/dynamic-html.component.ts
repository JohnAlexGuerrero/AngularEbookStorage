import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-html',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-html.component.html',
  styleUrl: './dynamic-html.component.css'
})
export class DynamicHtmlComponent implements OnInit, OnDestroy{
  @Input() xhtmlContent: string = '';
  sanitizedHtml: SafeHtml = 'assets/ebooks/la_conspiracion_umbrella/Text/sinopsis.xhtml';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(this.xhtmlContent);
    console.log(this.sanitizedHtml.toString());
  }



}
