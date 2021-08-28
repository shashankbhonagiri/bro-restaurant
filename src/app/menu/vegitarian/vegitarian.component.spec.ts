import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitarianComponent } from './vegitarian.component';

describe('VegitarianComponent', () => {
  let component: VegitarianComponent;
  let fixture: ComponentFixture<VegitarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegitarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegitarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
