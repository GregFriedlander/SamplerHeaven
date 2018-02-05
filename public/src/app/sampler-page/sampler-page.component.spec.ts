import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplerPageComponent } from './sampler-page.component';

describe('SamplerPageComponent', () => {
  let component: SamplerPageComponent;
  let fixture: ComponentFixture<SamplerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
