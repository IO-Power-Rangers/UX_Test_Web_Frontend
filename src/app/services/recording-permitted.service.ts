import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordingPermittedService {

  permitted$: Observable<any>;
  private permittedSubject = new Subject<any>();

  constructor() {
    this.permitted$ = this.permittedSubject.asObservable();
  }

  permitted() {
    this.permittedSubject.next();
  }
}
