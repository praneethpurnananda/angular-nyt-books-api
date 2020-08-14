import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authorsData;
  name;
  isLoaded = true;
  constructor(private _myservice:ServiceService) { }

  ngOnInit(): void {
    this.isLoaded = true;
    this._myservice.authors()
    .subscribe(
      data => {
            this.authorsData = data,
            console.log(this.authorsData);
            this.isLoaded = false;
          },
      error  => console.log('err')
    );

  }

  searchauthor(){
    if(this.name != ""){
      this.authorsData.results = this.authorsData.results.filter(res=>{
        return res.author.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
    else if(this.name == ""){
      this.ngOnInit();
    }
  }


}
