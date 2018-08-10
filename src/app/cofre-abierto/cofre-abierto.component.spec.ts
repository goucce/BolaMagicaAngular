import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofreAbiertoComponent } from './cofre-abierto.component';

describe('CofreAbiertoComponent', () => {
  let component: CofreAbiertoComponent;
  let fixture: ComponentFixture<CofreAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofreAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofreAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
