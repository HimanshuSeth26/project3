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

  constructor(private _projectService: ProjectService) {
  }

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  Boolean=true
  emp: Array<any> = [];
  userModel=new User('','','');
  user=[]
 //console.log(userModel)
  count = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 6, b: 9}];
  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];

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
  onChangeName($event) {
    //console.log($event._id)
    this.event=$event
    this._projectService.getElementById($event._id)
      .subscribe(
        data=> {
         this.user=data
          //console.log('success!', data)
          this.rerender();


        }
      )

  }

  onSubmit() {
    console.log(this.userModel);

    this._projectService.post(this.userModel)

      .subscribe(
        data=> {
          console.log('success!', data)
          this.userModel=new User(this.userModel.project,'','');
          this.onChangeName(this.event);
          this.toggle();

        },
        error=>console.error('Error!',error)

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
   value=[];
  id={}


  put(user1Id) {
    this.modal.show();
    this.id = user1Id;
    this._projectService.getElementById(user1Id).subscribe(data => {
      this.userModel = data
    });
  }

  AddTask(){


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
   this.Boolean=!this.Boolean;
  }
}

