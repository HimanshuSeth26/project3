import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProjectreviewComponent} from './projectreview.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
const Projectreview_ROUTE = [{path: '', component: ProjectreviewComponent}];

import { ModalModule } from 'ngx-bootstrap/modal';
import {NgSelectModule} from '@ng-select/ng-select';
import {DataTablesModule} from "angular-datatables";


@NgModule({
    declarations: [ProjectreviewComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(Projectreview_ROUTE),
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    NgSelectModule,
    DataTablesModule
  ]
})
export class ProjectreviewModule {
}
