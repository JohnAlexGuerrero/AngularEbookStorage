import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface Tab {
  title: string,
  id: string
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit{
  @Input() tabs: Tab[] = [];
  activeTabId: string = '';
  
  ngOnInit(): void {
    if (this.tabs.length > 0) {
      this.activeTabId = this.tabs[0].id // Activa el primer Tab por defecto
    }
  }

  selectTab(id: string){
    this.activeTabId = id;
  }


  

}
