import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFilterComponent } from './heroes-filter.component';

describe('HeroesFilterComponent', () => {
  let component: HeroesFilterComponent;
  let fixture: ComponentFixture<HeroesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
