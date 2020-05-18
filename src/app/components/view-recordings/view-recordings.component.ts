import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RecordingService } from 'src/app/services/recording.service';
import { UserService } from 'src/app/services/user.service';
import { TestService } from 'src/app/services/test.service';
import { Recording } from 'src/interfaces/recording';
import { Test } from '../create-tests/test';


@Component({
  selector: 'app-view-recordings',
  templateUrl: './view-recordings.component.html',
  styleUrls: ['./view-recordings.component.css']
})
export class ViewRecordingsComponent implements OnInit {

  testsFormControl = new FormControl();
  tests = [];

  videos = [];

  constructor(private recordingService: RecordingService, private testsService:TestService) { 
    //pobrać testy należace do usera i dodać do testList ich nazwy (id, name etc.)
    testsService.getTests().subscribe((data:[Test]) => {
      this.tests = data;
      console.log(data);
    })  
  }

  onSelectTest(test){

    this.recordingService.getVideosInfoByTest(test.id).subscribe((data) =>{
      this.videos = <[]>data;
      console.log(data);
    });
    
  }

  onSelectVideo(video){
    //pobrać kokretne nagranie
    
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

  ngOnInit(): void {
    
  }

}
