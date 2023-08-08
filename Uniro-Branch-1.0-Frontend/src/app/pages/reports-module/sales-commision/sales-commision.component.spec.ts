import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCommisionComponent } from './sales-commision.component';

describe('SalesCommisionComponent', () => {
  let component: SalesCommisionComponent;
  let fixture: ComponentFixture<SalesCommisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCommisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
