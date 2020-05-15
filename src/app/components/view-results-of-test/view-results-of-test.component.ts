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
  results : Object;

  getResults(){
    this.http.get(this.host + this.testsEndpoint + this.testID + "/results")
      .toPromise()
      .then(data => {
        this.results = data;
        var para = document.createElement("p");
        var node = document.createTextNode(JSON.stringify(data));
        para.appendChild(node);

        var element = document.getElementById("import");
        element.appendChild(para);
        console.log(data);
      });
  }

}
