import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellybindingComponent } from './bellybinding.component';

describe('BellybindingComponent', () => {
  let component: BellybindingComponent;
  let fixture: ComponentFixture<BellybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
