import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Recording } from 'src/interfaces/recording';

@Injectable({
  providedIn: 'root'
})
export class RecordingService {

  url = environment.apiUrl + '//recordingUpload'; 

  constructor(private http: HttpClient) { }

  postRecording(recording: Recording){
  
    this.http.post(this.url, recording).subscribe();
  }

  getVideo(id: Number){
    return this.http.get(this.url + "//" + id);
  }
}
