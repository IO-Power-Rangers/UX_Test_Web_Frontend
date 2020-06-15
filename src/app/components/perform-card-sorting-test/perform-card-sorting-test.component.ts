import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CategoryWithSubjects} from '../../../interfaces/cardsorting/categoryWithSubjects';
import {Subject} from '../../../interfaces/cardsorting/subject';
import {CardSortingResult} from '../../../interfaces/cardsorting/cardSortingResult';
import {CardSortingService} from '../../services/cardsorting.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-perform-card-sorting-test',
  templateUrl: './perform-card-sorting-test.component.html',
  styleUrls: ['./perform-card-sorting-test.component.css']
})
export class PerformCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title,
              private cardSortingService: CardSortingService,
              private router: Router
  ) {
    this.titleService.setTitle('Perform Card Sorting Test');
  }

  testID: bigint;
  test: any;
  subjects = [];
  categoriesWithSubjects: CategoryWithSubjects[] = [];
  categoriesIdList = [];
  testLoaded = false;

  ngOnInit(): void {
    document.getElementById('test').style.visibility = 'hidden';
  }


  getTest() {
    this.cardSortingService.getTest(this.testID)
      .subscribe(data => {
        this.test = data;
        this.subjects = JSON.parse(JSON.stringify(this.test.subjects));
        const categories = this.test.categories;
        for (let i = 0; i < categories.length; i++) {
          const current = categories[i];
          this.categoriesWithSubjects.push({
            subjects: [],
            category : {id : current.id, name : current.name}
          });
          this.categoriesIdList.push('categoryList' + current.id);
        }
        this.testLoaded = true;
        document.getElementById('test').style.visibility = 'visible';
      });
  }

  submit() {
    if (confirm('Please confirm that you want to save this solution.')) {

      const result: CardSortingResult = {
        test: this.test,
        categoriesWithSubjects: this.categoriesWithSubjects
      };
      this.cardSortingService.postResult(result);

      this.router.navigate(['/home']);

    }
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
