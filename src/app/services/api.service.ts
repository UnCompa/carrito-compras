import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = "https://dummyjson.com/products";
  private http = inject(HttpClient);
  constructor() {}

  getProductos<T>() {
    return this.http.get<T>(this.apiUrl);
  }
}
