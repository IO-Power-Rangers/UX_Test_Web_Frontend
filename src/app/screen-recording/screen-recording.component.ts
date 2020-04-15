import { Component, OnInit } from '@angular/core';
import { RecordingService } from '../recording.service'

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

  constructor(private recordingService : RecordingService) { }

  ngOnInit(): void {
    this.startRecording();
  }

  async startRecording(){
    
    let stream = await navigator.mediaDevices.getDisplayMedia(this.constraintObj);
    
    console.log(stream);
    let screenRecorder = new MediaRecorder(stream);

    screenRecorder.ondataavailable = (event) => {
      this.chunks.push(event.data);
    }

    let finishRecBtn = document.getElementById("finishRecBtn");

    finishRecBtn.addEventListener('click', (event) => {
      screenRecorder.stop();
    });

    screenRecorder.onstop = (event) => {
      let blob = new Blob(this.chunks, {'type' : 'video/mp4;'});      
      this.recordingService.postRecording(1, 2, blob);
      }

    screenRecorder.start();
  }

}
