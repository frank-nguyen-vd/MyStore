import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Cart } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: Cart = {};
  totalPrice = 0;
  fullName = '';
  address = '';
  creditCardNumber = '';

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log('cart=', this.cart);
    this.loadAll();
  }

  loadAll() {
    for (let productId in this.cart) {
      this.productService
        .getProductById(parseInt(productId))
        .subscribe((data) => {
          if (!this.cart) return;
          this.cart[parseInt(productId)].product = data;
        });
    }
  }

  getTotal() {
    this.totalPrice = 0;
    for (let productId in this.cart) {
      const data = this.cart[parseInt(productId)];
      this.totalPrice += data.qty * data.product.price;
    }

    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }
}
