import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CardSortingService} from '../../services/cardsorting.service';

@Component({
  selector: 'app-view-results-of-test',
  templateUrl: './view-results-of-test.component.html',
  styleUrls: ['./view-results-of-test.component.css']
})
export class ViewResultsOfTestComponent implements OnInit {

  constructor(private titleService: Title, private cardSortingService: CardSortingService) {
    this.titleService.setTitle('View Results of Card Sorting Test');
  }

  testID: bigint;
  displayedColumns: string[] = ['category', 'subject'];
  processedResults: any[] = [];
  isLoaded: boolean;

  ngOnInit(): void {
  }

  getResults() {
    this.cardSortingService.getResultsOfTest(this.testID)
      .subscribe(results => {
        this.processResults(results); });
  }

  processResults(results) {
    this.isLoaded = false;
    this.processedResults.length = 0;

    if (results.length === 0) {
      return;
    }
    const categoriesNames = [];
    const subjectNames = [];

    const categories = results[0].test.categories;
    for (let i = 0; i < categories.length; i++) {
      categoriesNames.push(categories[i].name);
    }

    const subjects = results[0].test.subjects;
    for (let i = 0; i < subjects.length; i++) {
      subjectNames.push(subjects[i].name);
    }

    for (const categoryName of categoriesNames) {
      const occurrenceCounter = {};
      for (const subjectName of subjectNames) {
        occurrenceCounter[subjectName] = 0;
      }
      for (const result of results) {
          for (const categoryWithSubject of result.categoriesWithSubjects) {
              if (categoryWithSubject.category.name === categoryName) {
                for (const subject of categoryWithSubject.subjects) {
                  occurrenceCounter[subject.name]++;
                }
              }
          }
      }
      const sortedOccurrenceCounter = Object.keys(occurrenceCounter).map(function(key) {
        return [key, occurrenceCounter[key]];
      });

      sortedOccurrenceCounter.sort(function(first, second) {
        return second[1] - first[1];
      });

      this.processedResults.push({category: categoryName, subject: sortedOccurrenceCounter});
    }

    this.isLoaded = true;
  }

}
