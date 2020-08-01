import { Component, OnInit } from '@angular/core';
import {User} from "../registration/user";
import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import {Projects} from "@angular/cli/lib/config/schema";
import {ProjectsService} from "./projects.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  //employee = [{name: 'Alex'}, {name: 'Martin'}];

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

  onChangeName(event) {
    console.log(event);
  }
}

