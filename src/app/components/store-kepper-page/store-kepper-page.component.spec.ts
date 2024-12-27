import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKepperPageComponent } from './store-kepper-page.component';

describe('StoreKepperPageComponent', () => {
  let component: StoreKepperPageComponent;
  let fixture: ComponentFixture<StoreKepperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreKepperPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreKepperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
