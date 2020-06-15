import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from "rxjs";
import {CardSortingResult} from "../../interfaces/cardsorting/cardSortingResult";
import {CardSortingTest} from "../../interfaces/cardsorting/cardSortingTest";

@Injectable({
  providedIn: 'root'
})
export class CardSortingService {

  host = environment.apiUrl;

  constructor(private http: HttpClient) { }
  testsEndpoint = '/api/cardsorting/tests/';
  resultsEndpoint = '/api/cardsorting/results/';

  getResultsOfTest(testID): Observable<Object>{
    return this.http.get(this.host + this.testsEndpoint + testID + "/results");
  }

  getTest(testID): Observable<Object> {
    return this.http.get(this.host + this.testsEndpoint + testID);
  }

  postResult(result : CardSortingResult) {
    this.http.post(this.host + this.resultsEndpoint, JSON.stringify(result), {headers: {'Content-Type': 'application/json'}})
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }

  postTest(test : CardSortingTest) {
    this.http.post(this.host + this.testsEndpoint, test)
      .toPromise()
      .then(testId => {
        confirm("Created CardSorting Test ID: "+ Number(testId))
      })
  }
}
