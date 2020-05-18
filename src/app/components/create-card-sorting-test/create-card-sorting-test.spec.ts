import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCardSortingTestComponent } from './create-card-sorting-test.component';

describe('CreateTestsComponent', () => {
  let component: CreateCardSortingTestComponent;
  let fixture: ComponentFixture<CreateCardSortingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
