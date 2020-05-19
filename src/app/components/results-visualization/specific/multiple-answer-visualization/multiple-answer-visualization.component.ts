import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MultipleAnswerResult } from 'src/app/interfaces/questionnaire/result/result';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-multiple-answer-visualization',
  templateUrl: './multiple-answer-visualization.component.html',
  styleUrls: ['./multiple-answer-visualization.component.css']
})
export class MultipleAnswerVisualizationComponent implements OnInit, OnChanges {
  public ready: Boolean = false;
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

  @Input() result: MultipleAnswerResult

  constructor() { }

  ngOnInit(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  ngOnChanges(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  private visualize() {
    this.barChartLabels = Array.from(this.result.answers.keys()).map(p => p.toString())
    this.barChartData = [{
      data: Array.from(this.result.answers.values()), 
      label: "Answer count"
    }]
    this.ready = true;
  }

}
