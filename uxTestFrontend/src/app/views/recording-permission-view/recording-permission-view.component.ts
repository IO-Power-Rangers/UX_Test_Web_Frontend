import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recording-permission-view',
  templateUrl: './recording-permission-view.component.html',
  styleUrls: ['./recording-permission-view.component.css']
})
export class RecordingPermissionViewComponent implements OnInit {

  checked = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitDecision(rememberFlag) {
   
  }

}
