import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TextResult } from 'src/app/interfaces/questionnaire/result/result';

@Component({
  selector: 'app-text-visualization',
  templateUrl: './text-visualization.component.html',
  styleUrls: ['./text-visualization.component.css']
})
export class TextVisualizationComponent implements OnInit, OnChanges {

  ready: Boolean = false;

  @Input() result: TextResult

  constructor() { }

  ngOnInit(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  ngOnChanges(): void {
    if(this.result != null && this.result != undefined) this.visualize()
  }

  private visualize() {
    this.ready = true;
  }

}
