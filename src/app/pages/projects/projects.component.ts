import { Component, OnInit } from '@angular/core';

import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectsService} from "./projects.service";
import {User} from "./user";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  //employee = [{name: 'Alex'}, {name: 'Martin'}];
  userModel=new User('');
  users: Array<any> = [];





  constructor(private _projectsService: ProjectsService) {
  }

  ngOnInit() {

    this._projectsService.get()
      .subscribe(
        data => {
          this.users = data;


        }
      );
  }

    onSubmit() {
      this._projectsService.enroll(this.userModel)
        .subscribe(
          data=>console.log('success!',data),
          error=>console.error('Error!',error)
        )


    }




  onChangeName(event) {
    console.log(event);
  }
}

