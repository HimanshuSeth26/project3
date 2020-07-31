import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { RegistrationService} from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  topics = ['Angular', 'React', 'Vue'];


  userModel = new User("Rob",'ob@test.com',1234567890,'',0,'morning',true)

 // users: Array<any> = [];

  // private value: any;

  constructor(private _registrationService: RegistrationService) {
  }

  onSubmit() {

    this._registrationService.register(this.userModel)
      .subscribe(
        data => {
          console.log('Success', data);
        },
        error => console.error('Error', error))
    this.userModel = new User("Rob",'ob@test.com',1234567890,'',0,'morning',true)

  }

  //[routerLink]="['/test']" //html k button me dalne se routing ho jaata hai app.routing.module load children jo module load karna hai wo krna hai

}





