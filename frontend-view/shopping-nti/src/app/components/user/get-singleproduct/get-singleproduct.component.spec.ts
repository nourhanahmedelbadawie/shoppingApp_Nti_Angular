import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSingleproductComponent } from './get-singleproduct.component';

describe('GetSingleproductComponent', () => {
  let component: GetSingleproductComponent;
  let fixture: ComponentFixture<GetSingleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSingleproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
