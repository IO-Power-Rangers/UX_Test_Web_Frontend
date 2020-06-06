import { TestBed } from '@angular/core/testing';

import { TextAnswerService } from './text-answer.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('TextAnswerService', () => {
  let service: TextAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(TextAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
