import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }
    
    getEmployees() {
        const params = new HttpParams() 
            .set('page', '1') 
            .set('pageSize', '10');        
        return this.http.get<any[]>(`${this.baseUrl}/users`, {params});           
    }

    createEmployee(employee: any) {
        const headers = new HttpHeaders()
            .set('X-Auth', 'userId');        
        return this.http.post(`${this.baseUrl}/users`, employee, {headers});
    }

    updateEmployee(employee: any) {
        const headers = new HttpHeaders()
            .set('X-Auth', 'userId');        
        return this.http.put(`${this.baseUrl}/users/${employee.id}`, employee, {headers});
    }    
}
