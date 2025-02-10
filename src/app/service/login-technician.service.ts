import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginTechnicianService{
    private apiUrl = 'http://localhost:3000/technician/login';
    constructor(private _http: HttpClient){}

 loginTechnician(formData: FormData): Observable<any>{
        return this._http.post(`${this.apiUrl}`, formData)
    }
}