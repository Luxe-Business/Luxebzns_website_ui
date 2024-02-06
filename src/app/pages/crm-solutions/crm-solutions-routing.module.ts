import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrmSolutionsComponent } from './crm-solutions/crm-solutions.component';

const routes: Routes = [
  {
    path: '',
    component: CrmSolutionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmSolutionsRoutingModule { }
