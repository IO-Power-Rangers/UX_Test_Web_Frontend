import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsVisualizationComponent } from './results-visualization.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('ResultsVisualizationComponent', () => {
  let component: ResultsVisualizationComponent;
  let fixture: ComponentFixture<ResultsVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ ResultsVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
