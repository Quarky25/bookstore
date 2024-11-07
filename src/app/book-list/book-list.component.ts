import { Component } from '@angular/core';
import { IBookList } from '../model/book-model';
import { books } from '../services/book-list.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
books: IBookList[] = books




}
