import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBoxComponent } from './currency-box.component';

describe('CurrencyBoxComponent', () => {
  let component: CurrencyBoxComponent;
  let fixture: ComponentFixture<CurrencyBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyBoxComponent]
    });
    fixture = TestBed.createComponent(CurrencyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
