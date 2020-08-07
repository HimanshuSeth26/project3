import {AfterViewInit,Component, OnInit, OnDestroy,  ViewChild } from '@angular/core';
import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import { ProjectsService} from './projects.service';
import {User} from "./user";
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";



@Component({
  selector: 'app-projectreview',
  templateUrl: './projectreview.component.html',
  styleUrls: ['./projectreview.component.scss']
})
export class ProjectreviewComponent implements OnInit {

  constructor(private _projectService: ProjectsService) {
  }

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();

  emp: Array<any> = [];
  userModel=new User('','','');
  count = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 6, b: 9}];
  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];
   id: Array<any>=[];
  columns: Array<any> = [
    {
      title: 'Task',
    },
    {
      title: ' Delete',
    }, {
      title: ' Edit',
    },
    {
      title: 'Status'
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
  onChangeName($event: any) {

  }
  onSubmit() {
    console.log();

    this._projectService.post(this.userModel)

      .subscribe(
        data=> {
          console.log('success!', data)
          this.userModel=new User('','','');
          this.ngOnInit()
        },
        error=>console.error('Error!',error)

      )
  }

  delete(userId) {
    this._projectService.delete(userId)
      .subscribe(
        data => {
          console.log('data deleted ');
          this.ngOnInit();
        }
      );



  }

  put(userId) {
    this.modal.show();
    this.id = userId;
    this._projectService.getElementById(userId).subscribe(data => {
      this.userModel = data
    });

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
}

