import { TestBed } from '@angular/core/testing';

import { TextAnswerService } from './text-answer.service';

describe('TextAnswerService', () => {
  let service: TextAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
