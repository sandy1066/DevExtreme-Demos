import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridEditingComponent } from './data-grid-editing.component';

describe('DataGridEditingComponent', () => {
  let component: DataGridEditingComponent;
  let fixture: ComponentFixture<DataGridEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
