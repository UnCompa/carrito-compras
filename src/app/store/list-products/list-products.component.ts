import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ProductResponse,
  Product,
} from '../../interfaces/list-products-interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HttpClientModule, CurrencyPipe],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  constructor(private api: ApiService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.api
      .getProductos<ProductResponse>()
      .subscribe((data) => (this.products = data.products));
  }
}
