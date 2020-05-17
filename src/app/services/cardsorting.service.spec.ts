import { TestBed } from '@angular/core/testing';

import { CardSortingService } from './cardsorting.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('CardSortingService', () => {
  let service: CardSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(CardSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
