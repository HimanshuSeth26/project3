import {AfterViewInit,Component, OnInit, OnDestroy,  ViewChild } from '@angular/core';
import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import { ProjectService} from './project.service';
import {User} from "./user";
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";


@Component({
  selector: 'app-projectreview',
  templateUrl: './projectreview.component.html',
  styleUrls: ['./projectreview.component.scss']
})
export class ProjectreviewComponent implements OnInit {
  private startTime: string;
  private endTime: string;

  constructor(private _projectService: ProjectService) {
  }

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  Boolean = true
  emp: Array<any> = [];
  userModel = new User('', '', '');
  userModelPut = new User('', '', '');
  result = []
  user = []
  projectId = {}
  final = []
  //console.log(userModel)
  count = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 6, b: 9}];
  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];
  employee=''
  event: {}

  columns: Array<any> = [
    {
      title: 'Task',
    },
    {
      title: ' Status',
    }, {
      title: ' Edit',
    },
    {
      title: 'Delete'
    }

  ];


  projects = [{name: 'Predictive Maintainance'}, {name: 'Qa logbook'}, {name: 'eSOP Phase 2'}]
  tasks = ['irisk yet to be done', 'diagram discussion of PM done', ' working on Heat map algorithm']


  ngOnInit() {

    this._projectService.get1()
      .subscribe(
        data => {
          this.projects = data;
          this.rerender();
        });
  }

projectList(event){
  console.log(event._id)
  this.event = event
  this.projectId = event._id
  this.employee = event.employeeName.employeename;
  this._projectService.getElementById(event._id)
    .subscribe(
      data => {
        this.user = data
        console.log('success!', data)
        this.rerender();


      }
    )
}
  onChangeName($event) {
    console.log($event._id)
    this.event = $event
    this.projectId = $event._id
    this.employee = $event.employeeName.employeename;
    this._projectService.getElementById($event._id)
      .subscribe(
        data => {
          this.user = data
          console.log('success!', data)
          this.rerender();


        }
      )

  }

  onSubmit() {
    this._projectService.post(this.userModel)
      .subscribe(
        data => {
          console.log('success!', data)
          this.userModel = new User(this.userModel.project, '', '');
          this.onChangeName(this.event);
          this.toggle();
        },
        error => console.error('Error!', error)
      )
  }

  onEdit() {
    //console.log(this.taskId)
    // console.log(this.userModelPut)
    this._projectService.edit(this.taskId, this.userModelPut)
      .subscribe(
        data => {
          console.log('success!', data);
          this.onChangeName(this.event);
          this.modal.hide();

        }
      )

  }


  delete(user1Id) {
    this._projectService.delete(user1Id)
      .subscribe(
        data => {
          console.log('data deleted ');
          this.onChangeName(this.event);


        }
      );
  }

  value = [];
  id = {}
  taskId = {};
  bsConfig: any;
  bsValueRange: any;


  put(task) {
    this.modal.show();


    this._projectService.getElementByTask(this.projectId, task).subscribe(data => {
      this.result = data
      console.log(this.result)
      this.taskId = this.result[0]._id
      this.userModelPut = new User(this.result[0].project, this.result[0].state, this.result[0].task)
    });
  }

  AddTask() {


  }


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


  getData($event) {

  }

  toggle() {
    this.Boolean = !this.Boolean;
  }

  ngDate() {
    this.startTime = JSON.stringify(this.bsValueRange[0]);
    this.endTime = JSON.stringify(this.bsValueRange[1]) ;
    console.log(this.startTime)
    console.log(this.endTime)

  }
}



