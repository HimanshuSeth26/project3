import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { User } from './user';
import { CredentialsService} from './credentials.service';
import {DataTableDirective} from "angular-datatables";
import {Subject} from "rxjs";

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit, OnDestroy, AfterViewInit{
  constructor(private _credentialsService: CredentialsService) { }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();

  userModel = new User('');
  count = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 6, b: 9}];
  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];
  columns: Array<any> = [
    {
      title: 'Employee Name',
    },
    {
      title: ' Delete',
    }, {
      title: ' Edit',
    },

  ];
  value = [];
  id = {};

  ngOnInit() {

    this._credentialsService.get()
      .subscribe(
        data => {
          this.users = data;
          this.rerender();

        }
      );
  }





  onSubmit() {
    console.log(this.userModel);
    this._credentialsService.credit(this.userModel)
      .subscribe(
        data => {
          console.log('Success', data);  this.userModel = new User('');
          this.ngOnInit();
        },
        error => console.error('Error', error));

  }

  delete(userId) {
    this._credentialsService.delete(userId)
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
    this._credentialsService.getElementById(userId).subscribe(data => {
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
}

