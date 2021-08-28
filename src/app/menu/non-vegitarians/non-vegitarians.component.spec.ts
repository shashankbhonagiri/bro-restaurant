import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegitariansComponent } from './non-vegitarians.component';

describe('NonVegitariansComponent', () => {
  let component: NonVegitariansComponent;
  let fixture: ComponentFixture<NonVegitariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegitariansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegitariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
