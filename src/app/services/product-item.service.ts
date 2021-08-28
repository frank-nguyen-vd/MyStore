import { Injectable } from '@angular/core';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductItemService {
  private selectedProduct: product = {id: 0, name: '', price: 0, url: '', description: ''}

  constructor() { }

  setSelectedProduct(product: product){
    this.selectedProduct = product;
  }

  getSelectedProduct(){
    return this.selectedProduct;
  }

}
