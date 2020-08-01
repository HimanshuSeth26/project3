import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {TaskService} from "./task.service";
import {User} from "./user";
import {Subject} from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements  OnInit, OnDestroy, AfterViewInit {
  users: Array<any> = [];
  userModel = new User(' ');
  @ViewChild('modal', {static: false})
  modal: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  
  id = {};


  constructor(private _taskService: TaskService) { }
  onSubmit(){
    this._taskService.enroll(this.userModel)
    .subscribe(
      data=>console.log('success!',data),
      error=>console.error('Error!',error)
    )
    
  };
  columns: Array<any> = [
    {
      title: 'Tasks',
    },
    {
      title: ' Assign To',
    },
    {
      title: ' Delete',
    },

  ];


  ngOnInit() {
    this. _taskService.get()
    .subscribe(
      data =>{
        this.users=data
        this.rerender();
       }
    )
  }
  delete(userId) {
    this._taskService.delete(userId)
      .subscribe(
        data => {
          console.log('data deleted ');
          this.ngOnInit();
        }
      )


  }

  assignTo(userId) {}

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }




}
