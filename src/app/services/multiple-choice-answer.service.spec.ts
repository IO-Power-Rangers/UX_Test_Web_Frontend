import { TestBed } from '@angular/core/testing';

import { MultipleChoiceAnswerService } from './multiple-choice-answer.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('MultipleChoiceAnswerService', () => {
  let service: MultipleChoiceAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(MultipleChoiceAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
