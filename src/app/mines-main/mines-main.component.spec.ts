import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesMainComponent } from './mines-main.component';

describe('MinesMainComponent', () => {
  let component: MinesMainComponent;
  let fixture: ComponentFixture<MinesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
