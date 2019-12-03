import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillaComponent } from './add-villa.component';

describe('AddVillaComponent', () => {
  let component: AddVillaComponent;
  let fixture: ComponentFixture<AddVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
