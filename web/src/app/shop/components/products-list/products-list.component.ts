import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Product } from '../../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public isScreenSmall: boolean = false;
  products: Observable<Product[]> = new BehaviorSubject<Product[]>([]);
  quantities: number[] = [...Array(11).keys()];
  selectedQty = 1;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.products = this.productService.products;
    this.productService.loadAll();
  }

  addToCart(productId: number, product: Product): void {
    this.cartService.addToCart(productId, this.selectedQty, product);
    this.selectedQty = 1;
  }
}
