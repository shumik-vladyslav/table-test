import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VidZoneComponent } from './vid-zone.component';

describe('VidZoneComponent', () => {
  let component: VidZoneComponent;
  let fixture: ComponentFixture<VidZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VidZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VidZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
