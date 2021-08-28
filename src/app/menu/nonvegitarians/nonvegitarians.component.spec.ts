import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegitariansComponent } from './nonvegitarians.component';

describe('NonvegitariansComponent', () => {
  let component: NonvegitariansComponent;
  let fixture: ComponentFixture<NonvegitariansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonvegitariansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegitariansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
