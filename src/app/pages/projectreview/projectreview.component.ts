import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectreview',
  templateUrl: './projectreview.component.html',
  styleUrls: ['./projectreview.component.scss']
})
export class ProjectreviewComponent implements OnInit {

  constructor() { }
  projects=[{name:'Predictive Maintainance'},{name: 'Qa logbook'}, {name: 'eSOP Phase 2'}]
  tasks=['irisk yet to be done', 'diagram discussion of PM done', ' working on Heat map algorithm']
  ngOnInit() {
  }

}
