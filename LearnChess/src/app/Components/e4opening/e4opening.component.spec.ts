import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E4openingComponent } from './e4opening.component';

describe('E4openingComponent', () => {
  let component: E4openingComponent;
  let fixture: ComponentFixture<E4openingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E4openingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E4openingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
