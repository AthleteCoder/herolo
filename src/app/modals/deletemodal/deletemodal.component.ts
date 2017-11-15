import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DeletemodalComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  deleteBook(){
    this.booksService.deleteBook();
  }

}
