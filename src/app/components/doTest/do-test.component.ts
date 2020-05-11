import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Task} from '../../../interfaces/task';
import {ViewTestsService} from '../../services/view-tests.service';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})

export class DoTestComponent implements OnInit {

  message: Task[];

  constructor(private titleService: Title, private viewTestsService: ViewTestsService) {
    this.titleService.setTitle('Do the test');
  }

  ngOnInit(): void {
    this.viewTestsService.sharedMessage.subscribe(message => this.message = message);
  }
}
