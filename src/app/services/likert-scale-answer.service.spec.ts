import { TestBed } from '@angular/core/testing';

import { LikertScaleAnswerService } from './likert-scale-answer.service';

describe('LikertScaleAnswerService', () => {
  let service: LikertScaleAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikertScaleAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
