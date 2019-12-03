import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViallasListComponent } from './viallas-list.component';

describe('ViallasListComponent', () => {
  let component: ViallasListComponent;
  let fixture: ComponentFixture<ViallasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViallasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViallasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
