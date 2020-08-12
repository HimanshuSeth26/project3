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
  tasks:Array<any> = [];
  works:Array<any> = [];
  dta=[]
  obj={}
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
      data =>{console.log('success!', data);  this.userModel = new User(' ');
        this.ngOnInit()},
      error => console.error('Error!', error)
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
    this. _taskService.geti()
    .subscribe(
      data =>{
        this.tasks=data
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
  getI(userId){
    this.dta=userId
    console.log("taskid "+this.dta)
    this.modal.show();
    this._taskService.getEmp()
    .subscribe(
      data=>{this.users=data;this.ngOnInit();}
    )
  }
  work(userId){
    console.log("empid "+userId)
   this.obj={"employeename":userId,"task":this.dta}
    console.log(this.obj)
     this._taskService.wrkgeti(this.obj)
     .subscribe(
      data=>{console.log('data sucsess ');this.modal.hide();this.ngOnInit();},
      error=>console.error('Error!',error)

     )



  }
}
