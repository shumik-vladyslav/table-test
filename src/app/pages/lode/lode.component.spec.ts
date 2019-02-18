import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodeComponent } from './lode.component';

describe('LodeComponent', () => {
  let component: LodeComponent;
  let fixture: ComponentFixture<LodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
