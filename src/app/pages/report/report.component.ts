import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { ReportService} from './report.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {User} from './user';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements   OnInit, OnDestroy {
  isDisplay = false;
  isdisplay=true;
  private employeeId: any;

  constructor(private zone: NgZone, private _reportService: ReportService) {
  }

  private chart: am4charts.XYChart;
  employee = [{name: 'Alex'}, {name: 'Martin'}];
  userModel = new User('');
  taskList = [];
  user = [];
  users = [];
  tasks = [];
  obj={}
  report(data) {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.paddingRight = 20;


      chart.data = data;

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = 'task';
      categoryAxis.renderer.minGridDistance = 40;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      const series = chart.series.push(new am4charts.CurvedColumnSeries());
      series.dataFields.categoryX = 'task';
      series.dataFields.valueY = 'time';
      series.tooltipText = '{valueY.time}';
      series.columns.template.strokeOpacity = 0;
      series.columns.template.tension = 1;

      series.columns.template.fillOpacity = 0.75;

      const hoverState = series.columns.template.states.create('hover');
      hoverState.properties.fillOpacity = 1;
      hoverState.properties.tension = 0.8;

      chart.cursor = new am4charts.XYCursor();

// Add distinctive colors for each column using adapter
      series.columns.template.adapter.add('fill', function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarY = new am4core.Scrollbar();

      this.chart = chart;
    });
  }

  task(taskid) {
    // this.toggle();
    console.log(this.user);
    this._reportService.task(taskid, this.user)
      .subscribe(
        data => {
          console.log('data is updated');
          this.tasklist(this.taskList);
        }
      );

  }

  tasklist(event) {

    this.taskList = event;
    this.employeeId = event._id;
    console.log(event._id);
    this.user = event._id;
    this._reportService.tList(event._id)
      .subscribe(
        data => {
          this.tasks = data;
          // this.users = data;
        }

      );
      this._reportService.get(this.employeeId)
      .subscribe(
        data => {
        this.isDisplay=true;this.report(data);console.log(data);
        }
      );
  }
  pause(pauseid){
    console.log("user"+this.user);
    this._reportService.pause(pauseid, this.user)
      .subscribe(
        data => {
          console.log('data is updated');
          this.tasklist(this.taskList);
        }
      );
  }
  finishtasklist(){
    this.isDisplay=!this.isDisplay
  //  this.isdisplay=!this.isdisplay
  //  this.pausetasklist()
    // this._reportService.flist(this.employeeId)
    // .subscribe(
    //   data => {
      //   console.log('data is updated');
      //this.tasklist(this.taskList);
     // });

  }
   pausetasklist(){
     this.isdisplay=!this.isdisplay
    // this.isDisplay=!this.isDisplay
    // this.finishtasklist()
 }
  oWntask() {
if(this.employeeId===undefined || this.userModel.task ===""){
  console.log("undefined")
  alert('Enter appropriate data')

}else{
  this.obj = {'employeename': this.employeeId, 'task': this.userModel.task};
  this._reportService.oWnt(  this.obj)
    .subscribe(
      data => {
        console.log('data is updated');
        this.tasklist(this.taskList);
        this.userModel = new User('');

      }
    );
}
  }
  Finish(event){
    this._reportService.finish( event)
    .subscribe(
      data => {
        console.log('data is updated'); this.tasklist(this.taskList);})
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }



  ngOnInit() {

    this._reportService.geti()
      .subscribe(
        data => {
          this.employee = data;

          // this.tasklist(this.taskList);
        }
      );

    //  this.tasklist(event) page load hone pe employe select nhi hoga isliye event nhi chle ga or error dega
  }
}
