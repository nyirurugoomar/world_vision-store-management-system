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

    // Get a single technician by ID
    getTechnicianById(id: string): Observable<any> {
        return this._http.get(`${this.apiUrl}/${id}`);
    }

    // Update a technician by ID
    updateTechnicianById(id: string, technicianData: any): Observable<any> {
        return this._http.put(`${this.apiUrl}/${id}`, technicianData);
    }
}