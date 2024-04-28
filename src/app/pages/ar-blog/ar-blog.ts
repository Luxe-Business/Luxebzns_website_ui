import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicBlogComponent } from './ar-blog/ar-blog.component';

const routes: Routes = [
  {
    path: '',
    component: ArabicBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicBlogRoutingModule { }
