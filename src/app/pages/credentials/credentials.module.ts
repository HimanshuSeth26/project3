import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {CredentialsComponent} from "./credentials.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const CREDENTIALS_ROUTE = [{path: "", component: CredentialsComponent}];




@NgModule({
  declarations: [CredentialsComponent],
  imports: [

    HttpClientModule,
    RouterModule.forChild(CREDENTIALS_ROUTE),
    CommonModule,

    FormsModule,
  ]
})
export class CredentialsModule {
}
