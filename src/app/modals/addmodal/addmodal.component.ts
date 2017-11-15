import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookInterface } from '../../interfaces/books.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AddmodalComponent implements OnInit {

  Book: BookInterface = {
    Author: '',
    Date: new Date(),
    Title: ''
  }
  Errors:string;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  addNewBook(){
    if(this.Book.Author != null && this.Book.Author.length > 0 
      && this.Book.Title != null && this.Book.Title.length > 0
      && this.Book.Date != null){
      this.booksService.addNewBook(this.Book);
      this.Book= {
      Author: '',
      Date: new Date(),
      Title: ''
    }
  }
    else {
      this.Errors = 'You must Fill all fields!';
      setTimeout(()=> this.Errors = null,5000);
    }
  }

}
