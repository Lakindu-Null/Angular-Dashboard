import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesModuleComponent } from './sales-module.component';

describe('SalesModuleComponent', () => {
  let component: SalesModuleComponent;
  let fixture: ComponentFixture<SalesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
