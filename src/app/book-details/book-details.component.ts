import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { IBookList } from '../model/book-model';
import { books } from '../model/book-list.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
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
addToCart(book: IBookList): void {
  window.alert(`"${book.title}" has been added to the cart!`);
  this.cartService.addToCart(this.book);
  
}

}
