import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { IBookList } from '../model/book-model';
import { BookListService } from '../services/book-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
book: IBookList = {} as IBookList;
index: number = 0;
books: IBookList[] = []
constructor(private bookService: BookListService, private route: ActivatedRoute) {
  this.books = this.bookService.getBook();
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get("id");
    if(id !== null) {
      this.index = +id;
      this.loadBook(this.index)
    }
  });
}

loadBook(index: number): void {
  const books: any = this.bookService.getBook();
  if(index >= 0 && index < books.lenght) {
    this.books = books[index];
  }else {
    console.error("Product index out of bounds")
  }
}
}
