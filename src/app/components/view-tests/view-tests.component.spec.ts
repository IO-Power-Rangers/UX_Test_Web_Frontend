import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestsComponent } from './view-tests.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('ViewTestsComponent', () => {
  let component: ViewTestsComponent;
  let fixture: ComponentFixture<ViewTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ ViewTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
