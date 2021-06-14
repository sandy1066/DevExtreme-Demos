import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridCustomComponent } from './data-grid-custom.component';

describe('DataGridCustomComponent', () => {
  let component: DataGridCustomComponent;
  let fixture: ComponentFixture<DataGridCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
