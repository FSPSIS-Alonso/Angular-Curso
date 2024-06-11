import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameItemComponent } from './name-item.component';

describe('NameItemComponent', () => {
  let component: NameItemComponent;
  let fixture: ComponentFixture<NameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
