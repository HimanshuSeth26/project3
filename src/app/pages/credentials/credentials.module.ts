import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {CredentialsComponent} from "./credentials.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const CREDENTIALS_ROUTE = [{path: "", component: CredentialsComponent}];
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [CredentialsComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(CREDENTIALS_ROUTE),
    CommonModule,
    DataTablesModule,
    FormsModule,
  ]
})
export class CredentialsModule {
}
