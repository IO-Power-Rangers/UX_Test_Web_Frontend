import { Component, OnInit, Input, OnChanges, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Result, QuestionType, LikertScaleResult, MultipleChoiceResult, MultipleAnswerResult, TextResult } from 'src/app/interfaces/questionnaire/result/result';
import { LikertScaleVisualizationComponent } from '../specific/likert-scale-visualization/likert-scale-visualization.component';
import { MultipleChoiceVisualizationComponent } from '../specific/multiple-choice-visualization/multiple-choice-visualization.component';
import { MultipleAnswerVisualizationComponent } from '../specific/multiple-answer-visualization/multiple-answer-visualization.component';
import { TextVisualizationComponent } from '../specific/text-visualization/text-visualization.component';

@Component({
  selector: 'app-dynamic-result-visualization',
  templateUrl: './dynamic-result-visualization.component.html',
  styleUrls: ['./dynamic-result-visualization.component.css']
})
export class DynamicResultVisualizationComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() result: Result
  @ViewChild("ref", { read: ViewContainerRef }) container : ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private detector: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
    if(this.result != null && this.result != undefined && this.container != null && this.container != undefined) this.createVisualization(this.result)
  }

  ngAfterViewInit(): void {
    if(this.result != null && this.result != undefined && this.container != null && this.container != undefined) this.createVisualization(this.result)
    this.detector.detectChanges();
  }

  private createVisualization(result: Result) {
    console.log("here")
      switch(result.type) {
        case QuestionType.LIKERT_SCALE: {
          this.createLikertScaleVisualization(result as LikertScaleResult)
          break
        }
        case QuestionType.MULTIPLE_ANSWER: {
          this.createMultipleAnswerVisualization(result as MultipleAnswerResult)
          break
        }
        case QuestionType.MULTIPLE_CHOICE: {
          this.createMultipleChoiceVisualization(result as MultipleChoiceResult)
          break;
        }
        case QuestionType.TEXT: {
          this.createTextVisualization(result as TextResult)
          break;
        }
      }
      this.detector.markForCheck()
  }

  private createLikertScaleVisualization(result: LikertScaleResult) {
    let ref = this.container.createComponent(this.resolver.resolveComponentFactory(LikertScaleVisualizationComponent))
    ref.instance.result = result
  }

  private createMultipleChoiceVisualization(result: MultipleChoiceResult) {
    let ref = this.container.createComponent(this.resolver.resolveComponentFactory(MultipleChoiceVisualizationComponent))
    ref.instance.result = result
  }

  private createMultipleAnswerVisualization(result: MultipleAnswerResult) {
    let ref = this.container.createComponent(this.resolver.resolveComponentFactory(MultipleAnswerVisualizationComponent))
    ref.instance.result = result
  }

  private createTextVisualization(result: TextResult) {
    let ref = this.container.createComponent(this.resolver.resolveComponentFactory(TextVisualizationComponent))
    ref.instance.result = result
  }

}
