import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CardSortingTest} from '../../../interfaces/cardsorting/cardSortingTest';
import {CardSortingService} from '../../services/cardsorting.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-card-sorting-test',
  templateUrl: './create-card-sorting-test.component.html',
  styleUrls: ['./create-card-sorting-test.component.css']
})
export class CreateCardSortingTestComponent implements OnInit {

  constructor(private titleService: Title,
              private cardSortingService: CardSortingService,
              private userService: UserService,
              private router: Router) {
    this.titleService.setTitle('Create Card Sorting Tests');
  }

  public rawCategories: any[] = [{
    name: ''
  }];

  public rawSubjects: any[] = [{
    name: ''
  }];

  ngOnInit(): void {
  }

  addCategory() {
    this.rawCategories.push({
      name : ''
    });
  }

  addSubject() {
    this.rawSubjects.push({
      name : ''
    });
  }

  removeCategory(i) {
    this.rawCategories.splice(i, 1);
  }

  removeSubject(i) {
    this.rawSubjects.splice(i, 1);
  }

  submitTest() {

    if (confirm('Please confirm that you want to save this test. You won\'t be able to make any changes to it later.')) {

      const test: CardSortingTest = {
        creator: this.userService.getUser(),
        categories: this.rawCategories,
        subjects: this.rawSubjects,
        results: []
      };

      this.cardSortingService.postTest(test);

      this.router.navigate(['/home']);

    }
  }

  logValue() {
    console.log(this.rawCategories + ' ' + this.rawSubjects);
  }
}
