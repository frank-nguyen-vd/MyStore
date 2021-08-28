import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product } from 'src/app/model/product';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class CartComponent implements OnInit {
  cartList: {[productId: number]: {productInfo: product, amount: number}} = {};
  totalPrice = 0;
  fullName = '';
  address = '';
  creditCardNumber = '';

  constructor(private cartService: CartService, private router: Router, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getTotal();
  }

  getTotal(){
    this.totalPrice = 0;
    for(let productId in this.cartList){
      this.totalPrice += this.cartList[productId].amount * this.cartList[productId].productInfo.price;
    }

    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));
  }

  purchase(){
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.cartService.setPurchaseInfo(this.fullName, this.address, this.totalPrice);
              this.router.navigateByUrl('/confirmation');
          },
          reject: (type: ConfirmEventType) => {
              switch(type) {
                  case ConfirmEventType.REJECT:
                      this.messageService.add({key: 'notif', severity:'error', summary:'Rejected', detail:'You have rejected'});
                  break;
                  case ConfirmEventType.CANCEL:
                      this.messageService.add({key: 'notif', severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                  break;
              }
          }
      });
  }

  removeItem(productId: number){
    this.messageService.add({key:'notif', severity:'info', summary: 'Product Removed', detail: `${this.cartList[productId].productInfo.name} is removed`})
    this.cartService.removeItem(productId);
    this.getTotal();
    
  }

  isCartListEmpty(): boolean{
    if(Object.keys(this.cartList).length == 0){
      return true;
    }
    return false;
  }
}