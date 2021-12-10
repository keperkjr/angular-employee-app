import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }
    
    getEmployees() {
        return this.http.get<any[]>(`${this.baseUrl}/users`);           
    }
}
