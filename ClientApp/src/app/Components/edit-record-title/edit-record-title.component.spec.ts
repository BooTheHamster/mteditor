import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecordTitleComponent } from './edit-record-title.component';

describe('EditRecordTitleComponent', () => {
  let component: EditRecordTitleComponent;
  let fixture: ComponentFixture<EditRecordTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecordTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecordTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
