import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinefieldsComponent } from './minefields.component';

describe('MinefieldsComponent', () => {
  let component: MinefieldsComponent;
  let fixture: ComponentFixture<MinefieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinefieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinefieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
