import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    @Input()
    employees!: Array<any>;    

    @Output('employeeDelete')
    employeeDeleteEmitter = new EventEmitter();

    @Output('employeeEdit')
    employeeEditEmitter = new EventEmitter();

    editing: number | null = null;

    cachedEmployee: any = null;

    constructor() { }

    ngOnInit(): void {
    }

    isEditing(id: number) {
        return this.editing === id;
    }

    onCancelEdit(employee: any) {
        Object.assign(employee, this.cachedEmployee);
        this.cachedEmployee = null;
        this.editing = null;
    }

    onSetEditMode(employee: any) {
        if (this.editing != null && this.editing != employee.id) {
            let prevEmp = this.employees.find((x) => x.id == this.editing);
            if (prevEmp != null) {
                this.onCancelEdit(prevEmp);
            }
        }
        this.cachedEmployee = Object.assign({}, employee);
        this.editing = employee.id;
    }

    onEmployeeEdit(employee: any) {        
        if (employee.name === '' || employee.email === '') return;
        this.employeeEditEmitter.emit(employee);
        this.cachedEmployee = null;
        this.editing = null;        
    }

    onEmployeeDelete(id: number) {
        this.employeeDeleteEmitter.emit(id);
    }    

}
