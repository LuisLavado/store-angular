import { Component, Input, signal, SimpleChanges } from '@angular/core';
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
  @Input({ required: true }) cart: Product[] = [];

  totalPrice = signal<number>(0);

  toggleSideMenu() {
    this.hideSideMenu.update(preState => !preState);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart && cart.currentValue) {
      this.totalPrice.set(this.calculateTotalPrice());
    }
  }

  calculateTotalPrice() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

}
