import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CofreCerradoComponent } from './cofre-cerrado.component';

describe('CofreCerradoComponent', () => {
  let component: CofreCerradoComponent;
  let fixture: ComponentFixture<CofreCerradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CofreCerradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CofreCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
