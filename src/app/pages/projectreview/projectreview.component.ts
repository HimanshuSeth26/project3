import { Component, OnInit } from '@angular/core';
import {ViewcredentialsService} from "../viewcredentials/viewcredentials.service";
import { ProjectsService} from './projects.service';


@Component({
  selector: 'app-projectreview',
  templateUrl: './projectreview.component.html',
  styleUrls: ['./projectreview.component.scss']
})
export class ProjectreviewComponent implements OnInit {

  users: Array<any> = [];
  emp: Array<any> = [];


  constructor(private _projectService: ProjectsService) {
  }

  projects = [{name: 'Predictive Maintainance'}, {name: 'Qa logbook'}, {name: 'eSOP Phase 2'}]
  tasks = ['irisk yet to be done', 'diagram discussion of PM done', ' working on Heat map algorithm']


  ngOnInit() {

    this._projectService.get1()
      .subscribe(
        data => {
          this.projects = data;
        });
  }

  onChangeName($event: any) {

  }
}

