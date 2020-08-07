import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';

import { ViewcredentialsService} from './viewcredentials.service';
import { User } from './user';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-viewcredentials',
  templateUrl: './viewcredentials.component.html',
  styleUrls: ['./viewcredentials.component.scss']
})
export class ViewcredentialsComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private _viewcredentialsService: ViewcredentialsService) {
  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  options: any = {};
  dtTrigger: Subject<any> = new Subject();
  userModel = new User('himanshu', 'abcd');
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

    this._viewcredentialsService.get()
      .subscribe(
        data => {
          this.users = data;
          this.rerender();

        }
      );
  }

   onSubmit() {
     this._viewcredentialsService.edit( this.userModel, this.id)
       .subscribe(
         data => {
           console.log('Success', data); this.modal.hide(), this.ngOnInit();
         },
         error => console.error('Error', error));
   }

  delete(userId) {
    this._viewcredentialsService.delete(userId)
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
    this._viewcredentialsService.getElementById(userId).subscribe(data => {
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




