import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/item';

  constructor(private _http:HttpClient) {}

  addItem(formData: FormData): Observable<any> {
    return this._http.post(`${this.apiUrl}`, formData);
  }
}
