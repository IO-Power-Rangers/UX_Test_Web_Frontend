import { TestBed } from '@angular/core/testing';

import { RecordingPermittedService } from './recording-permitted.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('RecordingPermittedService', () => {
  let service: RecordingPermittedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(RecordingPermittedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
