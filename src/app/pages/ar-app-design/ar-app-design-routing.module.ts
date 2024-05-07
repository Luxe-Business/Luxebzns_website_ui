import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicAppDesignComponent } from './ar-app-design/ar-app-design.component';

const routes: Routes = [
  {
    path: '',
    component: ArabicAppDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicAppDesignRoutingModule { }
