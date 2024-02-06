import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmSolutionsComponent } from './crm-solutions.component';

describe('CrmSolutionsComponent', () => {
  let component: CrmSolutionsComponent;
  let fixture: ComponentFixture<CrmSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrmSolutionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrmSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
