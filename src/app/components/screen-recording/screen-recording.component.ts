import { Component, OnInit } from '@angular/core';
import { RecordingService } from '../../recording.service';

@Component({
  selector: 'app-screen-recording',
  templateUrl: './screen-recording.component.html',
  providers: [RecordingService],
  styleUrls: ['./screen-recording.component.css']
})
export class ScreenRecordingComponent implements OnInit {

  constraintObj = {
    cursor: "motion",
    logicalSurface: false,
    "width" : {min: 640, idel: 640, max: 640},
    "height" : {min: 480, ideal: 480, max: 480}
  };
  chunks = [];
  screenRecorder = undefined;

  constructor(private recordingService : RecordingService) { }

  ngOnInit(): void {

  }

  async startRecording(userId, testId){

    let stream = await navigator.mediaDevices.getDisplayMedia(this.constraintObj);

    this.screenRecorder = new MediaRecorder(stream);

    this.screenRecorder.ondataavailable = (event) => {
      this.chunks.push(event.data);
    }

    this.screenRecorder.onstop = (event) => {
      let blob = new Blob(this.chunks, {'type' : 'video/mp4;'});
      this.recordingService.postRecording(userId, testId, blob);
      }

    this.screenRecorder.start();
  }

  finishRecording(){
      this.screenRecorder.stop();
  }

}
