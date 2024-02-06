import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiChatbotsComponent } from './ai-chatbots/ai-chatbots.component';

const routes: Routes = [
  {
    path: '',
    component: AiChatbotsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiChatbotsRoutingModule { }
