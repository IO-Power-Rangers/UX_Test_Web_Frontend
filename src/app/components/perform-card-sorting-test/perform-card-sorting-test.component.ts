import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CategoryWithSubjects} from "./categoryWithSubjects";
import {Subject} from "../create-card-sorting-test/subject";
import {CardSortingResult} from "./cardSortingResult";
import {CardSortingService} from "../../services/cardsorting.service";

@Component({
  selector: 'app-perform-card-sorting-test',
  templateUrl: './perform-card-sorting-test.component.html',
  styleUrls: ['./perform-card-sorting-test.component.css']
})
export class PerformCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title, private cardSortingService: CardSortingService) {
    this.titleService.setTitle('Perform Card Sorting Test');
  }

  ngOnInit(): void {
    document.getElementById("test").style.visibility="hidden";
  }

  testID : bigint;
  test : Object;
  subjects = [];
  categoriesWithSubjects : CategoryWithSubjects[] = [];
  categoriesIdList = [];
  testLoaded = false;


  getTest() {
    this.cardSortingService.getTest(this.testID)
      .subscribe(data => {
        this.test = data;
        this.subjects = JSON.parse(JSON.stringify(data['subjects']));
        const categories = data['categories'];
        for(let i = 0; i < categories.length; i++){
          let current = categories[i];
          this.categoriesWithSubjects.push({
            subjects: [],
            category : {id : current['id'], name : current['name']}
          });
          this.categoriesIdList.push("categoryList"+current['id'])
        }
        this.testLoaded = true;
        document.getElementById("test").style.visibility="visible";
        console.log(data);
      });
  }

  submit(){
    const result: CardSortingResult = {
      test: this.test,
      categoriesWithSubjects: this.categoriesWithSubjects
    };
    this.cardSortingService.postResult(result)
  }

  drop(event: CdkDragDrop<Subject[], any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
