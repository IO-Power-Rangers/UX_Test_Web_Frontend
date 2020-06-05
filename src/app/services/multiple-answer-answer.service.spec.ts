import { TestBed } from '@angular/core/testing';

import { MultipleAnswerAnswerService } from './multiple-answer-answer.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('MultipleAnswerAnswerService', () => {
  let service: MultipleAnswerAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(MultipleAnswerAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
