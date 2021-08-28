import { Injectable } from '@angular/core';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { [productId: number] : {productInfo: product, amount: number}} = {}
  private purchaseInfo: {fullname: string, address: string, total: number} = {fullname: '', address: '', total: 0}

  constructor() { }

  addCart(productId: number, product: product, quantity: number){
    if(productId in this.cart){
      this.cart[productId].amount += quantity
    }
    else{
      this.cart[productId] = {productInfo: product, amount: quantity}
    }
  }

  getCart(){
    return this.cart;
  }

  resetCart(){
    this.cart = {};
    this.purchaseInfo = {fullname: '', address: '', total: 0};
  }

  setPurchaseInfo(fullname: string, address: string, total: number){
    this.purchaseInfo.fullname = fullname;
    this.purchaseInfo.address = address;
    this.purchaseInfo.total = total
  }

  getPurchaseInfo(): {fullname: string, address: string, total: number}{
    return this.purchaseInfo;
  }

  removeItem(productId: number){
    delete this.cart[productId];
  }
}
