import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  url = 'https://ux-test-power-rangers.herokuapp.com//recordingUpload'; 

  constructor(private http: HttpClient) { }

  postRecording(userId, testId, recording: Blob){
    
    const headers = new HttpHeaders({
      'responseType' : 'blob' as 'json'
    });
    
    console.log(recording);

    let path = "/" + userId + "/" + testId;

    this.http.post(this.url + path, recording , {headers : headers}).subscribe(
      data => {console.log(data);}
    );
  }
}
