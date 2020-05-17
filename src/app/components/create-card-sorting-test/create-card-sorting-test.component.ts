import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CardSortingTest} from "./cardSortingTest";
import {CardSortingService} from "../../services/cardsorting.service";

@Component({
  selector: 'app-create-card-sorting-test',
  templateUrl: './create-card-sorting-test.component.html',
  styleUrls: ['./create-card-sorting-test.component.css']
})
export class CreateCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title, private cardSortingService: CardSortingService) {
    this.titleService.setTitle('Create Card Sorting Tests');
  }

  ngOnInit(): void {
  }

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

    const test: CardSortingTest = {
      categories : this.rawCategories,
      subjects: this.rawSubjects,
      results: []
    };

    this.cardSortingService.postTest(test)
  }

  logValue() {
    console.log(this.rawCategories+' '+this.rawSubjects);
  }
}
