import { Component, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatListModule, MatIcon,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  items = signal<MenuItem[]>([
    {path: '/home', icon: 'home', label: 'Home'},
    {path: '/books', icon: 'book', label: 'Books'},
  ]);

  collapsed = input.required<boolean>();

}
