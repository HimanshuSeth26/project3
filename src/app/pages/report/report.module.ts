import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {ReportComponent} from "./report.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const REPORT_ROUTE = [{path: "", component: ReportComponent}];

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ReportComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(REPORT_ROUTE),
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class ReportModule {
}
