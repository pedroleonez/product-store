import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.inteface';

@Component({
  selector: 'app-list',
  imports: [],
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
