import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/model/product';
import { ProductItemService } from 'src/app/services/product-item.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product = {id:0, name:'', price:0, url: '', description: ''};
  @Output() addedProduct = new EventEmitter();
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  selectedQuantity = 1;

  constructor(private productItemService: ProductItemService, private cartService: CartService) { 
  }

  ngOnInit(): void {
    
  }

  addToCart(product: product): void{
    this.addedProduct.emit({product: product, amount: this.selectedQuantity});
  }

  setSelectedItem(product: product){
    this.productItemService.setSelectedProduct(product);
  }

}
