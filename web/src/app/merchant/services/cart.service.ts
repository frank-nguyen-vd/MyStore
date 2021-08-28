import { Injectable } from '@angular/core';

interface Cart {
  [productId: number]: { qty: number };
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {};
  constructor() {}

  addToCart(productId: number, qty: number) {
    if (this.cart && productId in this.cart) {
      this.cart[productId].qty += qty;
    } else {
      this.cart[productId] = { qty };
    }
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
