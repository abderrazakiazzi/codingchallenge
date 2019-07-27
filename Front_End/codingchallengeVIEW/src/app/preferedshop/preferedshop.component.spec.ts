import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferedshopComponent } from './preferedshop.component';

describe('PreferedshopComponent', () => {
  let component: PreferedshopComponent;
  let fixture: ComponentFixture<PreferedshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferedshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferedshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
