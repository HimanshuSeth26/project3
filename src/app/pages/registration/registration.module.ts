import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { HttpClientModule } from "@angular/common/http"
import {RegistrationComponent} from "./registration.component";
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";
const REGISTRATION_ROUTE = [{path: "", component: RegistrationComponent}];

@NgModule({
    declarations: [RegistrationComponent],
  imports: [


    HttpClientModule,
    RouterModule.forChild(REGISTRATION_ROUTE),
    CommonModule,
    FormsModule,
  ]
})
export class RegistrationModule {
}
