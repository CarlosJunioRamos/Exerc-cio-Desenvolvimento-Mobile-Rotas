import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Modulo2Component } from './modulo2.component';

const routes: Routes = [
  { path: '', component: Modulo2Component },
  { path: 'child2', component: Modulo2Component }
];

@NgModule({
  declarations: [Modulo2Component],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class Modulo2Module { }
