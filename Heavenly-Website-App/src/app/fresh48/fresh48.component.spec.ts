import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fresh48Component } from './fresh48.component';

describe('Fresh48Component', () => {
  let component: Fresh48Component;
  let fixture: ComponentFixture<Fresh48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fresh48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fresh48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
