import { Component, OnInit } from '@angular/core';
import {User} from "../employee/user";
//import {RegistrationService} from "../employee.service";

class EmployeeService {
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  userModel = new User('himanshu','rob@gmail.com');

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
