import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTecComponent } from './img-tec.component';

describe('ImgTecComponent', () => {
  let component: ImgTecComponent;
  let fixture: ComponentFixture<ImgTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
