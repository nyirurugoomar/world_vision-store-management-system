import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class GetTechnicianService{
    private apiUrl = 'http://localhost:3000/technician';
    constructor(private _http: HttpClient){}


    getTechnicians(): Observable<any>{
        return this._http.get(`${this.apiUrl}`)
    }
  }