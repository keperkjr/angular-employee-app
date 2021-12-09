import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
    @Input()
    employees:any;    

  constructor() { }

  ngOnInit(): void {
  }

}
