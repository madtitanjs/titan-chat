import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatScreenComponent } from './new-chat-screen.component';

describe('NewChatScreenComponent', () => {
  let component: NewChatScreenComponent;
  let fixture: ComponentFixture<NewChatScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChatScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
