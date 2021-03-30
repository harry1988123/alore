import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSegment2Component } from './add-segment2.component';

describe('AddSegment2Component', () => {
  let component: AddSegment2Component;
  let fixture: ComponentFixture<AddSegment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSegment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSegment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
