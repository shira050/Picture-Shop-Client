import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessComponent } from './bless.component';

describe('BlessComponent', () => {
  let component: BlessComponent;
  let fixture: ComponentFixture<BlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
