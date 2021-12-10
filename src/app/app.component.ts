import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-employee-app';

    employees: Array<any> = [];

    constructor(private apiService: ApiService) {
   
    }
   
    ngOnInit() {
        try {
            this.apiService.getEmployees().subscribe((data) => {
                this.employees = data;
            });
        } catch (error) {
            console.log(error)
        }
    }    
 
    onAddEmployee(employee: any) {
        try {
            this.apiService.createEmployee(employee).subscribe((data) => {
                this.employees.push(data);
            });
        } catch (error) {
            console.log(error);
        }
    }   
    
    onDeleteEmployee(id: number) {
    }

    onEditEmployee(updatedEmployee: any) {  
        try {
            this.apiService.updateEmployee(updatedEmployee).subscribe((data: any) => { 
                let index = this.employees.findIndex((x) => x.id == data.id);
                this.employees[index] = data;
            });
            // setTimeout(() => {
            //     alert(`${updatedEmployee.name} updated!`);
            // }, 200);
        } catch (error) {
            // Error will occur for non default entries
            console.log(error);
        }         
    }    

    // employees = [
    //     {
    //       id: 1,
    //       name: 'Richard Hendricks',
    //       email: 'richard@piedpiper.com',
    //     },
    //     {
    //       id: 2,
    //       name: 'Bertram Gilfoyle',
    //       email: 'gilfoyle@piedpiper.com',
    //     },
    //     {
    //       id: 3,
    //       name: 'Dinesh Chugtai',
    //       email: 'dinesh@piedpiper.com',
    //     },
    // ];
      
    // onAddEmployee(employee: any) {
    //     const lastId =
    //     this.employees.length > 0
    //         ? this.employees[this.employees.length - 1].id
    //         : 0;
    //     const id = lastId + 1;
    //     const newEmployee = { ...employee, id };

    //     this.employees = [...this.employees, newEmployee];
    // }   
    
    // onDeleteEmployee(id: number) {
    //     let index = this.employees.findIndex((x) => x.id == id);
    //     this.employees.splice(index, 1);
    // }

    // onEditEmployee(updatedEmployee: any) {
    //     let index = this.employees.findIndex((x) => x.id == updatedEmployee.id);
    //     this.employees[index] = updatedEmployee;    
    // }
}
