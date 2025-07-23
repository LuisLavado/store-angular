import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const initialProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=11',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 200,
        image: 'https://picsum.photos/640/640?r=21',
        createdAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 300,
        image: 'https://picsum.photos/640/640?r=31',
        createdAt: new Date().toISOString()
      }
    ];

    this.products.set(initialProducts);
  }

  fromChild(event: string): void {
    console.log('We are in the parent component.', event);
  }


}
