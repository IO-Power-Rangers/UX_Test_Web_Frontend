import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MultipleChoiceResult } from 'src/interfaces/questionnaire/result/result';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-multiple-choice-visualization',
  templateUrl: './multiple-choice-visualization.component.html',
  styleUrls: ['./multiple-choice-visualization.component.css']
})
export class MultipleChoiceVisualizationComponent implements OnInit, OnChanges {
  public ready : Boolean = false;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[]
  public pieChartData: number[]
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)', 'rgba(255,255,0,0.5)', 'rgba(255,0,255,0.5', 'rgba(0,255,255,0.5)'],
    },
  ];

  @Input() result: MultipleChoiceResult

  constructor() { }

  ngOnInit(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  ngOnChanges(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  private visualize() {
    this.pieChartLabels = Array.from(this.result.answers.keys()).map(p => p.toString())
    this.pieChartData = Array.from(this.result.answers.values())
    this.ready = true;
  }

}
