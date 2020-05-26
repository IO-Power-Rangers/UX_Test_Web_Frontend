import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecordingService } from 'src/app/services/recording.service';
import { UserService } from 'src/app/services/user.service';
import { TestService } from 'src/app/services/test.service';
import { Recording } from 'src/interfaces/recording';
import { Test } from 'src/interfaces/test';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-view-recordings',
  templateUrl: './view-recordings.component.html',
  styleUrls: ['./view-recordings.component.css']
})
export class ViewRecordingsComponent implements OnInit {

  testsFormControl = new FormControl();
  test;

  videos = [];
  allVideos = [];

  ngOnInit(){
    var testId = parseInt(this.router.snapshot.paramMap.get('testId'));

    this.recordingService.getVideosInfoByTest(testId).subscribe((data) =>{
      this.allVideos = <[]>data;
      this.videos = this.allVideos.slice(0,10);
    });

    this.testsService.getTest(testId).subscribe((data) =>{
      this.test = <Test>data;
    });
  }

  constructor(private recordingService: RecordingService, private testsService:TestService, private router: ActivatedRoute) {   
  }

  onSelectVideo(video){

    this.recordingService.getVideo(video.id).subscribe((data) => {
      const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
      
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
      
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
      
        const blob = new Blob(byteArrays, {type: contentType});
        return blob;
      }

      
      var vid = document.getElementById("videoView");
      var blob = b64toBlob(data["video"], "video/mp4;");
      var blobURL = URL.createObjectURL(blob);
      vid.setAttribute("src", blobURL);
    })
  }

  OnPageChanged(event : PageEvent){
    this.videos = this.allVideos.slice(event.pageIndex * event.pageSize, event.pageIndex * event.pageSize + event.pageSize); 
  }
}
