import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import {ViewcredentialsComponent} from './viewcredentials.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
const VIEWCREDENTIALS_ROUTE = [{path: '', component: ViewcredentialsComponent}];
import { DataTablesModule } from 'angular-datatables';

import {ModalModule} from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ViewcredentialsComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(VIEWCREDENTIALS_ROUTE),
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    DataTablesModule,

  ]
})
export class ViewcredentialsModule{
}
