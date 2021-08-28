import { Component, OnInit } from '@angular/core';
import { ProductListService } from 'src/app/services/product-list.service';
import { product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [MessageService]
})
export class ProductListComponent implements OnInit {
  productList: product[] = []
  
  constructor(private productListService: ProductListService, private cartService: CartService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.productListService.getProductList().subscribe(res => {
      this.productList = res
    });
  }

  addToCart(cartItem: {product: product, amount: number}){
    this.cartService.addCart(cartItem.product.id, cartItem.product, cartItem.amount);
    this.messageService.add({key:'notif', severity:'info', summary: 'Product Added', detail: `${cartItem.product.name} added to cart`})
  }

}
