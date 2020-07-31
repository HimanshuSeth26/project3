import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {EmployeeComponent} from "./employee.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const EMPLOYEE_ROUTE = [{path: "", component: EmployeeComponent}];

@NgModule({
    declarations: [EmployeeComponent],
  imports: [


    HttpClientModule,
    RouterModule.forChild(EMPLOYEE_ROUTE),
    CommonModule,
    FormsModule,
  ]
})
export class EmployeeModule {
}
