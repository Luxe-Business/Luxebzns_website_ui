import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArabicWebDesignComponent } from './ar-website-design.component';


describe('ArabicWebDesignComponent', () => {
  let component: ArabicWebDesignComponent;
  let fixture: ComponentFixture<ArabicWebDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicWebDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArabicWebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
