import { TestBed } from '@angular/core/testing';

import { MultipleChoiceAnswerService } from './multiple-choice-answer.service';

describe('MultipleChoiceAnswerService', () => {
  let service: MultipleChoiceAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
