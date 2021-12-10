import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

    employee = {
        name: '',
        email: ''
    };

    constructor() { }

    ngOnInit(): void {
    }

    handleSubmit() {
        console.log(this.employee);
    }

}
