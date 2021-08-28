import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  quantities: number[] = [...Array(11).keys()];
  selectedQty = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productService
        .getProductById(id)
        .subscribe((product) => (this.product = product));
    });
  }

  addToCart(productId: number): void {
    this.cartService.addToCart(productId, this.selectedQty, this.product);
    this.selectedQty = 1;
  }
}
