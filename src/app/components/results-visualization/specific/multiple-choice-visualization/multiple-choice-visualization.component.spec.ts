import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceVisualizationComponent } from './multiple-choice-visualization.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('MultipleChoiceVisualizationComponent', () => {
  let component: MultipleChoiceVisualizationComponent;
  let fixture: ComponentFixture<MultipleChoiceVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ MultipleChoiceVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
