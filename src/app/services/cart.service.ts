import { Injectable } from '@angular/core';
import { IBookList } from '../model/book-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: IBookList[] = []
private cartItems = new BehaviorSubject<IBookList[]>([]);
cartItems$ = this.cartItems.asObservable();
  constructor() { }

  addToCart(newItem: IBookList): void {
    const updatedItems = [...this.cartItems.value]
    const existingItem = updatedItems.find(item => item.id === newItem.id)

    if(existingItem) {
      existingItem.quantity +=1;

    }else {
      updatedItems.push({...newItem, quantity: 1});
    }

    this.cartItems.next(updatedItems)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
