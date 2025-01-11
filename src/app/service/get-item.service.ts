import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class GetItemService {


    private apiUrl = 'http://localhost:3000/item';
    constructor(private _http: HttpClient){}



    getItem(): Observable<any>{
        return this._http.get(`${this.apiUrl}`)
    }
  }