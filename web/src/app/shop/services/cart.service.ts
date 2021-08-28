import { Injectable } from '@angular/core';
import { Product } from '../models/product';

export interface Cart {
  [productId: number]: { qty: number; product: Product };
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {};
  constructor() {}

  addToCart(productId: number, qty: number, product: Product): void {
    if (this.cart && productId in this.cart) {
      this.cart[productId].qty += qty;
      this.cart[productId].product = product;
    } else {
      this.cart[productId] = { qty, product };
    }
    console.log('add to cart', this.cart);
  }

  getCart() {
    return this.cart;
  }

  emptyCart() {
    this.cart = {};
  }

  removeItem(productId: number) {
    delete this.cart[productId];
  }
}
