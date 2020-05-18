import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAnswerVisualizationComponent } from './multiple-answer-visualization.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('MultipleAnswerVisualizationComponent', () => {
  let component: MultipleAnswerVisualizationComponent;
  let fixture: ComponentFixture<MultipleAnswerVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ MultipleAnswerVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAnswerVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
