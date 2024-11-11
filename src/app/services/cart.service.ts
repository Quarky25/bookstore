import { Injectable } from '@angular/core';
import { IBookList } from '../model/book-model';
import { books } from '../model/book-list.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: IBookList[] = [];
books: IBookList[] = books
book: IBookList = {} as IBookList;




  constructor() { }

  addToCart(newItem: IBookList): void {
   const existingItem = this.cart.find((item) => item.title === newItem.title  )

   if(existingItem) {
    existingItem.quantity ++;
   }else {
    this.cart.push(newItem)
   }
  }
  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }

  getLengthOfCart() {
    return this.cart.length;
  }
}
