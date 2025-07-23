import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true);
  @Input() cart: Product[] = [];

  toggleSideMenu() {
    this.hideSideMenu.update(preState => !preState);
  }

}
