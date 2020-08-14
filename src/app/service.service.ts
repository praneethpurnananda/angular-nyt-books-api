import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  authors(){
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=n5an5TAfZAtq9gEdloPEGGNMmjypSsJI')
  }

  bestSellers(){
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=n5an5TAfZAtq9gEdloPEGGNMmjypSsJI')
  }
}
