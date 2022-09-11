import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDounComponent } from './drop-doun.component';

describe('DropDounComponent', () => {
  let component: DropDounComponent;
  let fixture: ComponentFixture<DropDounComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDounComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
