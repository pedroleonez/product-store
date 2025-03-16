import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.inteface';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CardComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products: Product[] = [];

  productService = inject(ProductsService);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
