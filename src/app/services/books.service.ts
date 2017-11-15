import { Injectable } from '@angular/core';
import { BookInterface } from '../interfaces/books.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  
  results;
  private BooksCollection: BookInterface[] = [
    {Author: 'Sarah Bowman', Date: new Date(), Title: 'The Magic Unicorn'},
    {Author: 'Deaidre Jones', Date: new Date(), Title: 'Go Away Mr Big'},
    {Author: 'Thomas OBrien', Date: new Date(), Title: 'The Mathmaticians'}
  ];
  private BookTargets = {EditBookIndex: 0, DeleteBookIndex: -1};  
  private _CurrentEditBook = {Book:this.BooksCollection[this.BookTargets.EditBookIndex]};
  get CurrentEditBook(){
    return this._CurrentEditBook;
  }
  set CurrentEditBook(index){
    this._CurrentEditBook = {Book:this.BooksCollection[this.BookTargets.EditBookIndex]};
  }
  constructor(private http: HttpClient) {}

   addNewBook(Book: BookInterface){
    var found = this.BooksCollection.some(function (el) {
      return el.Title === Book.Title;
    });
    if(!found){
      this.BooksCollection.push(Book);
    }
    else{
      alert('Error Book with same title found!');
    }

   }

   getAllBooks(){
     return this.BooksCollection;
   }

   getBooks() {
    return this.http.get<BookInterface>(`myapi/posts`).subscribe(data => {
      this.results = data;
    },
      err => {
        console.log('Something went wrong!');
      });
  }

  selectedDeleteBook(index){
    this.BookTargets.DeleteBookIndex = index;
  }

  deleteBook(){
    if(this.BookTargets.DeleteBookIndex != -1)
    this.BooksCollection.splice(this.BookTargets.DeleteBookIndex,1);
  }

  editBook(Book: BookInterface){
    if(this.BookTargets.EditBookIndex != -1)
    this.BooksCollection[this.BookTargets.EditBookIndex] = Book;
  }

  selectedEditBook(index){
    this.CurrentEditBook.Book = this.BooksCollection[index];
  }
  
  getEditSelectedBook(){
    return this.CurrentEditBook;
  }

  FindDuplicated(Book){
    let dup:boolean=false;
    this.BooksCollection.map((book)=>{
      if(book.Title == Book.title){
        return dup = true;
      }
    })
    return dup;
  }
}
