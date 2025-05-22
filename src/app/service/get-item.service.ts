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

    getItemById(itemId: string): Observable<any>{
        return this._http.get(`${this.apiUrl}/${itemId}`)
    }

    updateItemById(itemId: string, itemData: any): Observable<any>{
        return this._http.put(`${this.apiUrl}/${itemId}`, itemData)
    }

    deleteItemById(itemId: string): Observable<any>{
        return this._http.delete(`${this.apiUrl}/${itemId}`)
    }
  }