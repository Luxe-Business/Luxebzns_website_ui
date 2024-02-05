import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAppDevelopmentComponent } from './mobile-app-development/mobile-app-development.component';

const routes: Routes = [
  {
    path: '',
    component: MobileAppDevelopmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileAppDevelopmentRoutingModule { }
