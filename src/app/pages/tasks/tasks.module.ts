import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import {TasksComponent} from './tasks.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
const Task_ROUTE = [{path: '', component: TasksComponent}];

@NgModule({
    declarations: [TasksComponent],
  imports: [


    HttpClientModule,
    RouterModule.forChild(Task_ROUTE),
    CommonModule,
    FormsModule,
  ]
})
export class TasksModule {
}
