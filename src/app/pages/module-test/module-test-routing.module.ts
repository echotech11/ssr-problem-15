import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleTestComponent } from './module-test.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleTestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTestRoutingModule { }
