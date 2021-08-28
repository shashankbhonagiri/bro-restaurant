import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegitariansComponent } from './vegitarians.component';

describe('VegitariansComponent', () => {
  let component: VegitariansComponent;
  let fixture: ComponentFixture<VegitariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegitariansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegitariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
