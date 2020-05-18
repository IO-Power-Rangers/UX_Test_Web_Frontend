import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikertScaleVisualizationComponent } from './likert-scale-visualization.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('LikertScaleVisualizationComponent', () => {
  let component: LikertScaleVisualizationComponent;
  let fixture: ComponentFixture<LikertScaleVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ LikertScaleVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikertScaleVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
