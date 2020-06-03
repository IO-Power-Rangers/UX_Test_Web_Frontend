import { Component, OnInit } from '@angular/core';

import { RecordingService } from '../../services/recording.service';
import { Recording } from 'src/interfaces/recording';

declare var MediaRecorder : any;


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

  async startRecording(user, test){

    let mediaDevices = navigator.mediaDevices as any;
    let stream = await mediaDevices.getDisplayMedia(this.constraintObj);


    this.screenRecorder = new MediaRecorder(stream);

    this.screenRecorder.ondataavailable = (event) => {
      this.chunks.push(event.data);
    }

    this.screenRecorder.onstop = (event) => {

      stream.getTracks().forEach(track => track.stop());
      let blob = new Blob(this.chunks, {'type' : 'video/mp4;'});

      var reader = new FileReader();
      reader.onloadend = () => {

        var video :String = (<String>reader.result).substr((<String>reader.result).indexOf(',') + 1);
        const recording: Recording = {user: user, test: test, video: video};
        this.recordingService.postRecording(recording);

      }

      reader.readAsDataURL(blob);
      }

    this.screenRecorder.start();
  }

  finishRecording(){
      this.screenRecorder.stop();
  }

}
