import { Component, OnInit, ViewChild } from '@angular/core';

import { ViewregistrationService} from './viewregistration.service';
import { User } from '../registration/user';
@Component({
  selector: 'app-viewregistration',
  templateUrl: './viewregistration.component.html',
  styleUrls: ['./viewregistration.component.scss']
})
export class ViewregistrationComponent implements OnInit {
  userModel = new User("Rob",'ob@test.com',1234567890,'',0,'morning',true)

  @ViewChild('modal', { static: false })
  modal: any;
  users: Array<any> = [];
  topics = ['Angular', 'React', 'Vue'];
  constructor(private _viewregistrationService: ViewregistrationService) {
  }

  ngOnInit() {
    this._viewregistrationService.get()
      .subscribe(
        data => {
          this.users = data
        }
      )
  }
  onSubmit() {
    this._viewregistrationService.edit(this.userModel,this.id)
      .subscribe(
        data => {
          console.log('Success', data);this.modal.hide(),this.ngOnInit();
        },
        error => console.error('Error', error))

  }

  delete(userId) {
    this._viewregistrationService.delete(userId)
      .subscribe(
        data => {
          console.log('data deleted ');
          this.ngOnInit();
        }
      )
  }

  value = [];
id={};
  put(userId) {
    this.modal.show();
    this.id=userId;
    this._viewregistrationService.getElementById(userId).subscribe(data => {
      this.userModel = data
    })

  }
}


