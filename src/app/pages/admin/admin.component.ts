import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from "rxjs";
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy, AfterViewInit {

  constructor(private _taskService: AdminService) { }

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  user: Array<any> = [];
  dtTrigger: Subject<any> = new Subject();

  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];

  columns: Array<any> = [
    {
      title: 'Employee',
    },
    {
      title: 'Working On',
    }
  ];




  ngOnInit() {
    this. _taskService.geti()
      .subscribe(
        data =>{
          this.users=data;console.log(this.users)
          this.rerender();

        }
      )
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
