import {AfterViewInit, Component,OnDestroy, OnInit,ViewChild } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';
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
  @ViewChild('modal', {static: false})
  modal: any;
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
    },
    {
      title: ' DELETE',
    } , {
      title: ' EDIT',
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
  }  delete(userId) {
    this._projectsService.delete(userId)
  .subscribe(
        data => {
          console.log('data deleted ',data)
          this.ngOnInit();}
        
      );
        }


        edit(){
          this._projectsService.edit( this.userModel, this.id)
          .subscribe(
            data => {
              console.log('Success', data); this.modal.hide(), this.ngOnInit();
            },
            error => console.error('Error', error));
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

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  ngOnDestroy() {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  put(userId) {
    this.modal.show();
    this.id = userId;
    this._projectsService.getElementById(userId).subscribe(data => {
      this. userModel = data;console.log(this.userModel)
    });

  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }
}













