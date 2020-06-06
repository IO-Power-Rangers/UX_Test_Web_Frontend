import { TestBed } from '@angular/core/testing';

import { LikertScaleAnswerService } from './likert-scale-answer.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('LikertScaleAnswerService', () => {
  let service: LikertScaleAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(LikertScaleAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
