import { Injectable } from '@angular/core';
import { IBookList } from '../model/book-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: IBookList[] = []

  constructor() { }

  addToCart(books: IBookList) {
    this.items.push(books);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
