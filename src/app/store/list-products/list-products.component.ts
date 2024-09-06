import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsInterface } from '../../interfaces/list-products-interface';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  constructor(private api: ApiService) {}

  products: ListProductsInterface[] = [];

  ngOnInit(): void {
    this.api
      .getProductos<ListProductsInterface[]>()
      .subscribe((data) => (this.products = data));
      console.log(this.products);
      
  }
}
