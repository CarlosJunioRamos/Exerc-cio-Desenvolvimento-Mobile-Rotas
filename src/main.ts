import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; 
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'modulo1', loadChildren: () => import('./app/modulo1.module').then(m => m.Modulo1Module) },
      { path: 'modulo2', loadChildren: () => import('./app/modulo2.module').then(m => m.Modulo2Module) },
      { path: '', redirectTo: '/modulo1', pathMatch: 'full' }
    ])
  ]
}).catch(err => console.error(err));
