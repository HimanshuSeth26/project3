import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { ReportService} from './report.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements   OnInit, OnDestroy  {
  constructor(private zone: NgZone, private _reportService: ReportService) {}
  private chart: am4charts.XYChart;
  employee = [ {name: 'Alex'}, {name: 'Martin'}];
  tasks = [{task: 'sorting of arrays'}, {task: 'Implementing Graphs'}, {task: 'Add Description in home page'}];
  report(data) {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.paddingRight = 20;


      chart.data = data;

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = 'country';
      categoryAxis.renderer.minGridDistance = 40;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      const series = chart.series.push(new am4charts.CurvedColumnSeries());
      series.dataFields.categoryX = 'country';
      series.dataFields.valueY = 'value';
      series.tooltipText = '{valueY.value}';
      series.columns.template.strokeOpacity = 0;
      series.columns.template.tension = 1;

      series.columns.template.fillOpacity = 0.75;

      const hoverState = series.columns.template.states.create('hover');
      hoverState.properties.fillOpacity = 1;
      hoverState.properties.tension = 0.8;

      chart.cursor = new am4charts.XYCursor();

// Add distinctive colors for each column using adapter
      series.columns.template.adapter.add('fill', function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarY = new am4core.Scrollbar();

      this.chart = chart;
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  onChangeName(event) {
    console.log(event);
  }
  ngOnInit() {
    this._reportService.get()
      .subscribe(
        data => {
         this.report(data);
        }
      );
  }
}
