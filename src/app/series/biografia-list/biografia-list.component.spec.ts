import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiaListComponent } from './biografia-list.component';

describe('BiografiaListComponent', () => {
  let component: BiografiaListComponent;
  let fixture: ComponentFixture<BiografiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografiaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiografiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
