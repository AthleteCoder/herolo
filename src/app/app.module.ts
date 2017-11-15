import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddmodalComponent } from './modals/addmodal/addmodal.component';
import { EditmodalComponent } from './modals/editmodal/editmodal.component';
import { DeletemodalComponent } from './modals/deletemodal/deletemodal.component';
import { BooksService } from './services/books.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/primeng';
import { CapitalPipe } from './pipes/capital.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddmodalComponent,
    EditmodalComponent,
    DeletemodalComponent,
    CapitalPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [BooksService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
