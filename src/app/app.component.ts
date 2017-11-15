import { Component } from '@angular/core';
import { BooksService } from './services/books.service';
import { BookInterface } from './interfaces/books.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private Books: BookInterface[];
  value: Date;
  constructor(private bookService: BooksService) {
    this.Books = bookService.getAllBooks();
  }

  deleteTarget(index){
    this.bookService.selectedDeleteBook(index);
  }

  editTarget(index){
    this.bookService.selectedEditBook(index);
    console.log('index selected',index);
  }
}
