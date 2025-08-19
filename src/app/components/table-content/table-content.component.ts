import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-table-item',
  standalone: true,
  imports: [],
  template: `
    <p
      (click)="selected()"
      class="text-[#121416] text-base font-normal leading-normal flex-1 truncate w-64"
    >{{title}}</p>
  `,
  styles: []

})
export class TableItemComponent {
  @Input() title: string = '';
  @Output() bgColor = new EventEmitter<boolean>();

  selected(): void {
    this.bgColor.emit(true);
  }
}

@Component({
  selector: 'app-table-content',
  standalone: true,
  imports: [
    CommonModule,
    TableItemComponent
  ],
  templateUrl: './table-content.component.html',
  styleUrl: './table-content.component.css'
})
export class TableContentComponent {
  @Input() listContent: string[] = [];
  flap: boolean = false;
  displayHidden: boolean = false;

  handleBgColor(flap: boolean) {
    this.flap = flap;
  }

  handleHidden() {
    this.displayHidden = true;
    console.log(this.displayHidden);
  }

  handleClosed() {
    this.displayHidden = false;
  }

}

