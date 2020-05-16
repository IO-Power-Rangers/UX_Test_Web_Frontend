import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {CardSortingResult} from "../perform-card-sorting-test/cardSortingResult";

@Component({
  selector: 'app-view-results-of-test',
  templateUrl: './view-results-of-test.component.html',
  styleUrls: ['./view-results-of-test.component.css']
})
export class ViewResultsOfTestComponent implements OnInit {

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('View Results of Card Sorting Test');
  }

  ngOnInit(): void {
  }

  host = 'http://localhost:8099';
  testsEndpoint = '/api/cardsorting/tests/';
  testID : bigint;
  processedResults = [];

  getResults(){
    this.http.get(this.host + this.testsEndpoint + this.testID + "/results")
      .toPromise()
      .then(data => {
        this.processResults(data);
        console.log(data);
      });
  }

  processResults(results){
    if(results.length === 0) return;
    let categoriesNames = [];
    let subjectNames = [];
    const categories = results[0].test.categories;
    for(let i = 0; i < categories.length; i++){
      categoriesNames.push(categories[i].name);
    }
    const subjects = results[0].test.subjects;
    for(let i = 0; i < subjects.length; i++){
      subjectNames.push(subjects[i].name);
    }
    for(let categoryName of categoriesNames){
      let occurrenceCounter = {};
      for(let subjectName of subjectNames){
        occurrenceCounter[subjectName] = 0;
      }
      for(let result of results){
          for(let categoryWithSubject of result.categoriesWithSubjects){
              if(categoryWithSubject.category.name === categoryName){
                for(let subject of categoryWithSubject.subjects){
                  occurrenceCounter[subject['name']]++;
                }
              }
          }
      }
      let sortedOccurrenceCounter = Object.keys(occurrenceCounter).map(function(key) {
        return [key, occurrenceCounter[key]];
      });

      sortedOccurrenceCounter.sort(function(first, second) {
        return second[1] - first[1];
      });
      this.processedResults.push([categoryName, sortedOccurrenceCounter]);
    }
  }

}
