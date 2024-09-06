import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)
  constructor() { }

  getProductos<T>() {
    return this.http.get<T>("https://fakestoreapi.com/products")
  }
}
