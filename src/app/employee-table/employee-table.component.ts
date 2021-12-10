import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    @Input()
    employees:any;    

    @Output('employeeDelete')
    employeeDeleteEmitter = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    onEmployeeDelete(id: number) {
        this.employeeDeleteEmitter.emit(id);
    }

}
