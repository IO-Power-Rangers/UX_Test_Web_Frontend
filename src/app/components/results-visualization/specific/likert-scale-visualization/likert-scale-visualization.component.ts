import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { LikertScaleResult } from 'src/interfaces/questionnaire/result/result';
import { ResultsVisualizationComponent } from '../../results-visualization.component';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-likert-scale-visualization',
  templateUrl: './likert-scale-visualization.component.html',
  styleUrls: ['./likert-scale-visualization.component.css']
})
export class LikertScaleVisualizationComponent implements OnInit, OnChanges {

  @Input() result: LikertScaleResult

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[]
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[];
  public ready: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  ngOnChanges(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  private visualize() {
    console.log(this.result)
    this.barChartLabels = Array.from(this.result.answers.keys()).map(p => p.toString())
    this.barChartData = [{
      data: Array.from(this.result.answers.values()),
      label: "Answer count"
    }]
    this.ready = true;
  }

}
