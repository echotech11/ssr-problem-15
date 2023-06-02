import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTestRoutingModule } from './module-test-routing.module';
import { ModuleTestComponent } from './module-test.component';


@NgModule({
  declarations: [
    ModuleTestComponent
  ],
  imports: [
    CommonModule,
    ModuleTestRoutingModule
  ]
})
export class ModuleTestModule { }
