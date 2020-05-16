import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CardSortingTest} from "./cardSortingTest";

@Component({
  selector: 'app-create-card-sorting-test',
  templateUrl: './create-card-sorting-test.component.html',
  styleUrls: ['./create-card-sorting-test.component.css']
})
export class CreateCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle('Create Card Sorting Tests');
  }

  ngOnInit(): void {
  }

  host = 'http://localhost:8099';
  testsEndpoint = '/api/cardsorting/tests';

  public rawCategories : any[] = [{
    name: ''
  }];

  public rawSubjects : any[] = [{
    name: ''
  }];

  addCategory() {
    this.rawCategories.push({
      name : ''
    })
  }

  addSubject() {
    this.rawSubjects.push({
      name : ''
    })
  }

  removeRecentlyAddedCategory() {
    this.rawCategories.pop();
  }

  removeRecentlyAddedSubject() {
    this.rawSubjects.pop();
  }

  submitTest() {

    const body: CardSortingTest = {
      categories : this.rawCategories,
      subjects: this.rawSubjects,
      results: []
    };

    this.http.post(this.host + this.testsEndpoint, JSON.stringify(body), {headers: {'Content-Type': 'application/json'}})
      .toPromise()
      .then(data => {
        console.log(data);
      });
  }

  logValue() {
    console.log(this.rawCategories+' '+this.rawSubjects);
  }
}
