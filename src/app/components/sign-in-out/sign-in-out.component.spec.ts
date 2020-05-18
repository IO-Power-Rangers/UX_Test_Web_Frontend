import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOutComponent } from './sign-in-out.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('SignInOutComponent', () => {
  let component: SignInOutComponent;
  let fixture: ComponentFixture<SignInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ SignInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
