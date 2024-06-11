import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectinalComponent } from './bidirectinal.component';

describe('BidirectinalComponent', () => {
  let component: BidirectinalComponent;
  let fixture: ComponentFixture<BidirectinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BidirectinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidirectinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
