import { TestBed } from '@angular/core/testing';

import { RecordingPermittedService } from './recording-permitted.service';

describe('RecordingPermittedService', () => {
  let service: RecordingPermittedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordingPermittedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
