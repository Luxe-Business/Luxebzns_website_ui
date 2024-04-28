import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArabicBlogComponent } from './ar-blog.component';


describe('ArabicWebDesignComponent', () => {
  let component: ArabicBlogComponent;
  let fixture: ComponentFixture<ArabicBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArabicBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArabicBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
