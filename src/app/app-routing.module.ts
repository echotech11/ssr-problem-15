import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'module-test',
    component: LayoutComponent,
    loadChildren: () => import('./pages/module-test/module-test.module').then(m => m.ModuleTestModule),
  },
  {
    path: 'standalone-test',
    loadComponent: () => import('./standalone-test/standalone-test.component').then(c => c.StandaloneTestComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
