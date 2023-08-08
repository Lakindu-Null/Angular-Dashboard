import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupModuleComponent } from './setup-module.component';

describe('SetupModuleComponent', () => {
  let component: SetupModuleComponent;
  let fixture: ComponentFixture<SetupModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
