import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { IBookList } from '../model/book-model';
import { books } from '../services/book-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
book: IBookList = {} as IBookList;
index: number = 0;

constructor(private route: ActivatedRoute) {
  
  this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get("id");
    if(id !== null) {
      this.index = +id;
      this.book = books[this.index]
    }
  });
}


}
