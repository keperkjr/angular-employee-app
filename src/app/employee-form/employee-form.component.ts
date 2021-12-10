import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

    @Output('employeeAdded')
    employeeEmitter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.employeeEmitter.emit(this.employee);
    }

}
