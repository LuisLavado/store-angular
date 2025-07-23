import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  totalPrice = this.cartService.total;


  toggleSideMenu() {
    this.hideSideMenu.update(preState => !preState);
  }

}
