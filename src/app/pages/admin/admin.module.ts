import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {AdminComponent} from './admin.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
const Projects_ROUTE = [{path: '', component: AdminComponent}];
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {DataTablesModule} from "angular-datatables";


@NgModule({
    declarations: [AdminComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(Projects_ROUTE),
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgSelectModule,
    AngularMultiSelectModule,
    DataTablesModule,
  ]
})
export class AdminModule {
}
