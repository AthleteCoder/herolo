import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookInterface } from '../../interfaces/books.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EditmodalComponent implements OnInit {

  Errors:string;
  SelectedBook: any;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.SelectedBook = this.booksService.getEditSelectedBook();
  }


  editBook(){
    if(this.SelectedBook.Author != null && this.SelectedBook.Author.length > 0 
      && this.SelectedBook.Title != null && this.SelectedBook.Title.length > 0
      && this.SelectedBook.Date != null){
    this.booksService.addNewBook(this.SelectedBook);
      }
    else {
      this.Errors = 'You must Fill all fields!';
    }
  }

}
