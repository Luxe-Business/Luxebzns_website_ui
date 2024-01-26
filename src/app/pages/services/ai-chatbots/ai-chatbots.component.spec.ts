import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatbotsComponent } from './ai-chatbots.component';

describe('AiChatbotsComponent', () => {
  let component: AiChatbotsComponent;
  let fixture: ComponentFixture<AiChatbotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiChatbotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiChatbotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
