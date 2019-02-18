import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupZoneComponent } from './group-zone.component';

describe('GroupZoneComponent', () => {
  let component: GroupZoneComponent;
  let fixture: ComponentFixture<GroupZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
