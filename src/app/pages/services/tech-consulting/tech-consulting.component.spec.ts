import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechConsultingComponent } from './tech-consulting.component';

describe('TechConsultingComponent', () => {
  let component: TechConsultingComponent;
  let fixture: ComponentFixture<TechConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechConsultingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
