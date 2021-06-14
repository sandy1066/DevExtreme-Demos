import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridArrayComponent } from './data-grid-array.component';

describe('DataGridArrayComponent', () => {
  let component: DataGridArrayComponent;
  let fixture: ComponentFixture<DataGridArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
