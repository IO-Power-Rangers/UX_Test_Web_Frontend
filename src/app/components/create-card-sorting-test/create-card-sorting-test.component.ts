import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CardSortingTest} from "../../../interfaces/cardsorting/cardSortingTest";
import {CardSortingService} from "../../services/cardsorting.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-create-card-sorting-test',
  templateUrl: './create-card-sorting-test.component.html',
  styleUrls: ['./create-card-sorting-test.component.css']
})
export class CreateCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title, private cardSortingService: CardSortingService, private userService: UserService) {
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

  removeCategory(i) {
    this.rawCategories.splice(i, 1);
  }

  removeSubject(i) {
    this.rawSubjects.splice(i, 1);
  }

  // removeRecentlyAddedCategory() {
  //   this.rawCategories.pop();
  // }
  //
  // removeRecentlyAddedSubject() {
  //   this.rawSubjects.pop();
  // }

  submitTest() {

    const test: CardSortingTest = {
      creator: this.userService.getUser(),
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
