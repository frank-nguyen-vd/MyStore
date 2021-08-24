import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products: BehaviorSubject<Product[]>;

  private dataStore: {
    products: Product[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { products: [] };
    this._products = new BehaviorSubject<Product[]>([]);
  }

  get products(): Observable<Product[]> {
    return this._products.asObservable();
  }

  getProductById(id: number): Product | undefined {
    return this.dataStore.products.find((x) => x.id == id);
  }

  loadAll() {
    const productsUrl = 'https://fakestoreapi.com/products/';

    return this.http.get<Product[]>(productsUrl).subscribe(
      (data) => {
        this.dataStore.products = data;
        this._products.next(Object.assign({}, this.dataStore).products);
      },
      (error) => {
        console.log('Failed to fetch products');
      }
    );
  }
}
