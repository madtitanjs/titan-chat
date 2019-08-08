import { ChatDimensionService } from './chat-dimension.service';
import { ApiModule } from './../api/api.module';
import { ChatDataService } from './chat-data.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatActionsComponent } from './chat-actions/chat-actions.component';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';

import { MatButtonModule, MatIconModule, MatInputModule, MatChipsModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ChatHeaderComponent,
    ChatActionsComponent,
    ChatContentComponent,
    ChatBubbleComponent,
    ChatSearchComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule
  ],
  exports: [
    ChatHeaderComponent,
    ChatActionsComponent,
    ChatContentComponent,
    ChatSearchComponent,
    ChatBubbleComponent
  ],
  providers: [
    ChatDataService,
    ChatDimensionService
  ]
})
export class ChatModule { }
