import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ProjectsComponent} from './projects.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
const Projects_ROUTE = [{path: '', component: ProjectsComponent}];

import { ModalModule } from 'ngx-bootstrap/modal';
import {NgSelectModule} from '@ng-select/ng-select';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";


@NgModule({
    declarations: [ProjectsComponent],
    imports: [

        HttpClientModule,
        RouterModule.forChild(Projects_ROUTE),
        CommonModule,
        FormsModule,
        ModalModule.forRoot(),
        NgSelectModule,
        AngularMultiSelectModule
    ]
})
export class ProjectsModule {
}
