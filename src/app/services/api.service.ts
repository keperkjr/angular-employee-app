import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl = 'https://jsonplaceholder.typicode.com';

    constructor(protected http: HttpClient) { }

    getHeaders() {
        const headers = new HttpHeaders()
        .set('X-Auth', 'userId'); 
        return headers;         
    }      
}

@Injectable({
    providedIn: 'root'
})
export class EmployeeApiService extends ApiService {
    getAll() {
        const params = new HttpParams() 
            .set('page', '1') 
            .set('pageSize', '10');        
        return this.http.get<any[]>(`${this.baseUrl}/users`, {params});           
    }

    get(id:number) {        
        return this.http.get<any>(`${this.baseUrl}/users/${id}`);           
    }    

    create(employee: any) {
        const headers = this.getHeaders();
        return this.http.post(`${this.baseUrl}/users`, employee, {headers});
    }

    update(employee: any) {
        const headers = this.getHeaders();        
        return this.http.put(`${this.baseUrl}/users/${employee.id}`, employee, {headers});
    } 
    
    delete(id: number) {
        const headers = this.getHeaders();      
        return this.http.delete(`${this.baseUrl}/users/${id}`, {headers});
    }    
}