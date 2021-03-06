import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformCardSortingTestComponent } from './perform-card-sorting-test.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('PerformCardSortingTestComponent', () => {
  let component: PerformCardSortingTestComponent;
  let fixture: ComponentFixture<PerformCardSortingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ PerformCardSortingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformCardSortingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
