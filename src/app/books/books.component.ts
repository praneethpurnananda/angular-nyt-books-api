import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksData;
  book;
  isLoaded = true;
  constructor(private _myservice:ServiceService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this._myservice.bestSellers()
    .subscribe(
      data => {
            this.booksData = data,
            console.log(this.booksData);
            this.isLoaded = false;
          },
      error  => console.log('err')
    );

  }

  searchBook(){
    if(this.book != ""){
      this.booksData.results = this.booksData.results.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.book.toLocaleLowerCase());
      });
    }
    else if(this.book == ""){
      this.ngOnInit();
    }
  }

}
