import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatActionsComponent } from './chat-actions.component';

describe('ChatActionsComponent', () => {
  let component: ChatActionsComponent;
  let fixture: ComponentFixture<ChatActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
