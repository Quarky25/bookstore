import { Component } from '@angular/core';
import { IBookList } from '../model/book-model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
cartItems: IBookList[] = [];
item: IBookList = {} as IBookList
index: number = 0;

constructor(private route: ActivatedRoute, private cartService: CartService) {
  
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get("id");
    if(id !== null) {
      this.index = +id;
      this.item = this.cartItems[this.index]
    }
  });
}

increaseQuantity(item: IBookList): void {
  item.quantity++;
}

decreaseQuantity(item: IBookList): void {
 if(item.quantity > 1) item.quantity--;
}

removeItem(item: IBookList): void {
  this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id)
}

calculateTotal(): number {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

checkout(): void {
  alert('Proceeding to checkout...')
}

}
