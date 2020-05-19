import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
