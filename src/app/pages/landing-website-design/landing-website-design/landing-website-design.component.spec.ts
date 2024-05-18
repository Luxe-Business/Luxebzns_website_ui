import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingWebDesignComponent } from './landing-website-design.component';


describe('ArabicWebDesignComponent', () => {
  let component: LandingWebDesignComponent;
  let fixture: ComponentFixture<LandingWebDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingWebDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingWebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
