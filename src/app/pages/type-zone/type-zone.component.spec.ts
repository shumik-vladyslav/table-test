import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeZoneComponent } from './type-zone.component';

describe('TypeZoneComponent', () => {
  let component: TypeZoneComponent;
  let fixture: ComponentFixture<TypeZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
