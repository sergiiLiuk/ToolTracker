import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolNewComponent } from './tool-new.component';

describe('ToolNewComponent', () => {
  let component: ToolNewComponent;
  let fixture: ComponentFixture<ToolNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
