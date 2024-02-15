import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechConsultingComponent } from './tech-consulting/tech-consulting.component';

const routes: Routes = [
  {
    path: '',
    component: TechConsultingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechConsultingRoutingModule { }
