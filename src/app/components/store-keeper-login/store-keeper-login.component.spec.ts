import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKeeperLoginComponent } from './store-keeper-login.component';

describe('StoreKeeperLoginComponent', () => {
  let component: StoreKeeperLoginComponent;
  let fixture: ComponentFixture<StoreKeeperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreKeeperLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreKeeperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
