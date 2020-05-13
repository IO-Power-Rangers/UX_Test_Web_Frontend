import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestsComponent } from './create-tests.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('CreateTestsComponent', () => {
  let component: CreateTestsComponent;
  let fixture: ComponentFixture<CreateTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ CreateTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
