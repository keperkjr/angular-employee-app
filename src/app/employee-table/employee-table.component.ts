import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    @Input()
    employees!: Array<any>;    

    @Output('deleteEmployee')
    deleteEmployeeEmitter = new EventEmitter();

    @Output('editEmployee')
    editEmployeeEmitter = new EventEmitter();

    editing: number | null = null;

    cachedEmployee: any = null;

    constructor() { }

    ngOnInit(): void {
    }

    getRowClasses(id: number) {
        return {
            'editing': this.isEditing(id)
        };
    }

    isEditing(id: number) {
        return this.editing === id;
    }

    onCancelEdit(employee: any) {
        Object.assign(employee, this.cachedEmployee);
        this.cachedEmployee = null;
        this.editing = null;
    }

    onBeginEdit(employee: any) {
        if (this.editing != null && this.editing != employee.id) {
            let prevEmp = this.employees.find((x) => x.id == this.editing);
            if (prevEmp != null) {
                this.onCancelEdit(prevEmp);
            }
        }
        this.cachedEmployee = Object.assign({}, employee);
        this.editing = employee.id;
    }

    onEditEmployee(employee: any) {        
        if (employee.name === '' || employee.email === '') return;
        this.editEmployeeEmitter.emit(employee);
        this.cachedEmployee = null;
        this.editing = null;        
    }

    onDeleteEmployee(id: number) {
        this.deleteEmployeeEmitter.emit(id);
    }    

}
