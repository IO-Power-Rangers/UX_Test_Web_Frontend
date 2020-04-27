import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-view-tests',
  templateUrl: './view-tests.component.html',
  styleUrls: ['./view-tests.component.css']
})
export class ViewTestsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('View your tests');
  }

  ngOnInit(): void {
  }

}
