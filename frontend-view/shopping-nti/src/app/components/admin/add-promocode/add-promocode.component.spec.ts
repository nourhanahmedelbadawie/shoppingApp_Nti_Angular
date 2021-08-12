import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromocodeComponent } from './add-promocode.component';

describe('AddPromocodeComponent', () => {
  let component: AddPromocodeComponent;
  let fixture: ComponentFixture<AddPromocodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPromocodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
