import { Component, EventEmitter, OnInit, Output, ElementRef, ViewChild } from '@angular/core';

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

    submitting = false;
    error = false;
    success = false;

    @Output('employeeAdded')
    employeeEmitter = new EventEmitter();

    @ViewChild("empName")
    empNameRef!: ElementRef;

    constructor() { }

    ngOnInit(): void {
    }

    handleSubmit() {
        this.submitting = true
        this.clearStatus()
    
        if (this.invalidName() || this.invalidEmail()) {
            this.error = true
            return
        }
        
        this.employeeEmitter.emit(this.employee);
        this.empNameRef.nativeElement.focus();

        this.employee = {
            name: '',
            email: '',
        }
        this.error = false
        this.success = true
        this.submitting = false        
    }

    clearStatus() {
        this.success = false
        this.error = false
    }    

    invalidName() {
        return this.employee.name == '';
    }

    invalidEmail() {
        return this.employee.email == '';
    }

}
