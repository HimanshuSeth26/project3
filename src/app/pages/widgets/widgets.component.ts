import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit {
  widgetTitle: string = 'Widgets';
  widgetSubTitle: string = 'Cumsociis natoque penatibus magnis parturient montes, nascetur ridiculus';

  constructor() { }

  ngOnInit() {
  }

}
