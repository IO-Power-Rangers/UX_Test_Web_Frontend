import { Component, OnInit } from '@angular/core';
import { ResultsService } from 'src/app/services/results.service';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators'
import { Result } from 'src/app/interfaces/questionnaire/result/result';

@Component({
  selector: 'app-results-visualization',
  templateUrl: './results-visualization.component.html',
  styleUrls: ['./results-visualization.component.css']
})
export class ResultsVisualizationComponent implements OnInit {

  constructor(private service: ResultsService, private route: ActivatedRoute) { }

  noParam: Boolean = false
  results: Array<Result>

  ngOnInit(): void {
    this.route.queryParamMap
                .pipe(map((params: Params) => params.params))
                .subscribe( (params) => {
                     if(params && params['id']){
                      this.loadResults(params['id'])
                     } else {
                      this.noParam = true;
                     }
                 });
  }

  private loadResults(questionnaireId: Number) {
    this.service.getResultsByQuestionnaireId(questionnaireId).subscribe(p => this.results = p)
  }

}
