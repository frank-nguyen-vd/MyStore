import { Component, OnInit } from '@angular/core';
import { ProductItemService } from 'src/app/services/product-item.service';
import { product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
  providers: [MessageService]
})
export class ProductItemDetailComponent implements OnInit {
  product: product = {id:0, name:'', price:0, url: '', description: ''};
  quantityList = [1,2,3,4,5,6,7,8,9,10];
  selectedQuantity = 1;

  constructor(private productItemService: ProductItemService, private cartService: CartService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.product = this.productItemService.getSelectedProduct();
  }

  addToCart(product: product): void{
    this.cartService.addCart(product.id, product, this.selectedQuantity);
    this.messageService.add({key:'notif', severity:'info', summary: 'Product Added', detail: `${product.name} added to cart`})
  }
}
