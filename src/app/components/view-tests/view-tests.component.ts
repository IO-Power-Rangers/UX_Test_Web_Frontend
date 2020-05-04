import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ViewTestsService} from '../../services/view-tests.service';
import {Test} from '../../../interfaces/test';


@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {

  test: Test;

  constructor(private titleService: Title, private viewTestsService: ViewTestsService) {
    this.titleService.setTitle('View your tests');
  }

  ngOnInit(): void {
  }


  showTest() {
    this.viewTestsService.getTest()
      .subscribe((data: Test) => this.test = {
        uxModel: data.uxModel,
        title: data.title,
        tasks: data.tasks
      });
  }
}
