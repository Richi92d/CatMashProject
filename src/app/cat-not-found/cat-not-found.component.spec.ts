import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNotFoundComponent } from './cat-not-found.component';

describe('CatNotFoundComponent', () => {
  let component: CatNotFoundComponent;
  let fixture: ComponentFixture<CatNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
