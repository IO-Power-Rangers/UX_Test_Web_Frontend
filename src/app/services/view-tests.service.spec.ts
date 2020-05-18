import { TestBed } from '@angular/core/testing';

import { ViewTestsService } from './view-tests.service';
import {CommonTestModule} from '../common-test/common-test.module';

describe('ViewTestsService', () => {
  let service: ViewTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(ViewTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
