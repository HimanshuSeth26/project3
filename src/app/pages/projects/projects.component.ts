import {AfterViewInit, Component,OnDestroy, OnInit,ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectsService} from "./projects.service";
import {User} from "./user";
import {Subject} from 'rxjs';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private _projectsService: ProjectsService) {
  }

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  userModel=new User('','');
  users: Array<any> = [];
  emp: Array<any>=[];
  columns: Array<any> = [
    {
      title: 'Project Name',
    },
    {
      title: ' Employee Name',
    }
  ];

  value = [];
  id = {};

  ngOnInit() {
    this._projectsService.get()
      .subscribe(
        data => {
          console.log('success!', data)
         // this.emp = data;
          this.users=data;

        });
    this._projectsService.get1()
      .subscribe(
        data => {
          this.emp = data;
          this.rerender();
        });
  }
    onSubmit() {
      this._projectsService.enroll(this.userModel)
        .subscribe(
          data=> {
            console.log('success!', data)
           this.userModel=new User('','');
            this.ngOnInit()
          },
          error=>console.error('Error!',error)

        )
    }
  onChangeName(event) {
    console.log(event);
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
}













