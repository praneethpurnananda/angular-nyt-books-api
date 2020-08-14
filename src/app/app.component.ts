import { Component , OnInit } from '@angular/core';
import { ServiceService } from "./service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor(private _myservice:ServiceService) {}
  ngOnInit(): void {
  // this._myservice.books()
  // .subscribe(
  //   data => console.log(data),
  //   error  => console.log('err')
  // );
}
  title = 'apicalling';
}
