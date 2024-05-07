import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArabicAppDesignComponent } from './ar-app-design.component';


describe('ArabicWebDesignComponent', () => {
  let component: ArabicAppDesignComponent;
  let fixture: ComponentFixture<ArabicAppDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicAppDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArabicAppDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
