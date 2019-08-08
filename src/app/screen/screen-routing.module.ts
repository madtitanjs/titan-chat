import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { NewChatScreenComponent } from './new-chat-screen/new-chat-screen.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'c', children: [
          { path: 'new', component: NewChatScreenComponent },
          { path: ':channel_id', component: ChatScreenComponent}
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenRoutingModule { }
