import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'modulo1', loadChildren: () => import('./modulo1.module').then(m => m.Modulo1Module) },
  { path: 'modulo2', loadChildren: () => import('./modulo2.module').then(m => m.Modulo2Module) },
  { path: '', redirectTo: '/modulo1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule.forRoot(routes)
  ],
})
export class AppModule { }
