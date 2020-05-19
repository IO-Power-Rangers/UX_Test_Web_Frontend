import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicResultVisualizationComponent } from './dynamic-result-visualization.component';
import { CommonTestModule } from 'src/app/common-test/common-test.module';

describe('DynamicResultVisualizationComponent', () => {
  let component: DynamicResultVisualizationComponent;
  let fixture: ComponentFixture<DynamicResultVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
      declarations: [ DynamicResultVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicResultVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
