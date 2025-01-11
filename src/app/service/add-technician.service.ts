import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class TechnicianService {
    private apiUrl = 'http://localhost:3000/technician';

    constructor(private _http:HttpClient){}

    addTechnician(formData: FormData): Observable<any>{
        return this._http.post(`${this.apiUrl}`, formData)
    }
  }