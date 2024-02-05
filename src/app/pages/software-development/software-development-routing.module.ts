import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareDevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareDevelopmentRoutingModule { }
