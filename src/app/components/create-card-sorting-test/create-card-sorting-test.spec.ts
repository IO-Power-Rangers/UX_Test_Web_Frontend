import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCardSortingTestComponent } from './create-card-sorting-test.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('CreateTestsComponent', () => {
  let component: CreateCardSortingTestComponent;
  let fixture: ComponentFixture<CreateCardSortingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ CreateCardSortingTestComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardSortingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
