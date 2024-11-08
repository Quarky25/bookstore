import { Component } from '@angular/core';
import { IBookList } from '../model/book-model';
import { books } from '../services/book-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
books: IBookList[] = books
book: IBookList = {} as IBookList;
index: number = 0;

constructor(private route: ActivatedRoute, private cartService: CartService) {
  
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get("id");
    if(id !== null) {
      this.index = +id;
      this.book = books[this.index]
    }
  });
}
addToCart() {
  window.alert('Your product has been added to the cart!');
  this.cartService.addToCart(this.book)
}



}
