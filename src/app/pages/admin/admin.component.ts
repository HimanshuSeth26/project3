import {Component, OnInit, OnDestroy,  ViewChild} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import {Subject} from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

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

  }

}




