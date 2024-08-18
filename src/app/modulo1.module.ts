import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Modulo1Component } from './modulo1.component';

const routes: Routes = [
  { path: '', component: Modulo1Component },
  { path: 'child1', component: Modulo1Component }
];

@NgModule({
  declarations: [Modulo1Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Modulo1Module { }
