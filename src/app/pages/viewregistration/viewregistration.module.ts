import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {ViewregistrationComponent} from "./viewregistration.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const VIEWREGISTRATION_ROUTE = [{path: "", component: ViewregistrationComponent}];

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ViewregistrationComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(VIEWREGISTRATION_ROUTE),
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class ViewregistrationModule {
}
