import { Component, OnInit, ViewChild } from '@angular/core';

import { ViewcredentialsService} from './viewcredentials.service';
import { User } from './user';

@Component({
  selector: 'app-viewcredentials',
  templateUrl: './viewcredentials.component.html',
  styleUrls: ['./viewcredentials.component.scss']
})
export class ViewcredentialsComponent implements OnInit {

  userModel = new User('himanshu', 'abcd');
  count=[{a:1,b:2},{a:3,b:4},{a:6,b:9}]
  @ViewChild('modal', {static: false})
  modal: any;
  users: Array<any> = [];

  constructor(private _viewcredentialsService: ViewcredentialsService) {
  }

  ngOnInit() {

    this._viewcredentialsService.get()
      .subscribe(
        data => {
          this.users = data
        }
      )
  }

   onSubmit() {
     this._viewcredentialsService.edit( this.userModel, this.id)
       .subscribe(
         data => {
           console.log('Success', data);this.modal.hide(),this.ngOnInit();
         },
         error => console.error('Error', error))
   }
  delete(userId) {
    this._viewcredentialsService.delete(userId)
      .subscribe(
        data => {
          console.log('data deleted ');
          this.ngOnInit();
        }
      )


  }

  value = [];
  id = {};

  put(userId) {
    this.modal.show();
    this.id = userId;
    this._viewcredentialsService.getElementById(userId).subscribe(data => {
      this.userModel = data
    })

  }

}




