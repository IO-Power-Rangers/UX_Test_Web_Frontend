import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  url = environment.apiUrl + '//recordingUpload'; 

  constructor(private http: HttpClient) { }

  postRecording(userId, testId, recording: Blob){
    
    const headers = new HttpHeaders({
      'responseType' : 'blob' as 'json'
    });
    
    let path = "/" + userId + "/" + testId;

    this.http.post(this.url + path, recording , {headers : headers}).subscribe(
      data => {console.log(data);}
    );
  }
}
