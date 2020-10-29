import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelphotosComponent } from './travelphotos.component';

describe('TravelphotosComponent', () => {
  let component: TravelphotosComponent;
  let fixture: ComponentFixture<TravelphotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelphotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
