import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegetarianComponent } from './non-vegetarian.component';

describe('NonVegetarianComponent', () => {
  let component: NonVegetarianComponent;
  let fixture: ComponentFixture<NonVegetarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonVegetarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVegetarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
