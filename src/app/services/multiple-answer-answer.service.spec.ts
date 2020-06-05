import { TestBed } from '@angular/core/testing';

import { MultipleAnswerAnswerService } from './multiple-answer-answer.service';

describe('MultipleAnswerAnswerService', () => {
  let service: MultipleAnswerAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleAnswerAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
