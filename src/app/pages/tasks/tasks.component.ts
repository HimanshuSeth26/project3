import {Component, OnInit, ViewChild} from '@angular/core';
import {TaskService} from "./task.service";
import {User} from "../employee/user";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  users: Array<any> = [];
  userModel = new User('himanshu', 'abcd');
  @ViewChild('modal', {static: false})
  modal: any;
  id = {};


  constructor(private _taskService: TaskService) { }

  ngOnInit() {
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





}
