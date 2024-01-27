import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiUxDesignServicesComponent } from './ui-ux-design-services.component';



describe('CrmSolutionsComponent', () => {
  let component: UiUxDesignServicesComponent;
  let fixture: ComponentFixture<UiUxDesignServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUxDesignServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiUxDesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
