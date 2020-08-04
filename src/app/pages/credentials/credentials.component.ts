import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { CredentialsService} from './credentials.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {

  userModel = new User('');


  users: Array<any> = [];

  constructor(private _credentialsService: CredentialsService) { }



  onSubmit() {
    console.log(this.userModel);
    this._credentialsService.credit(this.userModel)
      .subscribe(
        data => {
          console.log('Success', data);  this.userModel = new User('');

        },
        error => console.error('Error', error));

  }
}

