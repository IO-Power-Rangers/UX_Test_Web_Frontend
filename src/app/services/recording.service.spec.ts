import { TestBed } from '@angular/core/testing';

import { RecordingService } from './recording.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('RecordingService', () => {
  let service: RecordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(RecordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
