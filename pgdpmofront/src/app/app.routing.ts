import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' , canActivate: [AuthGuard]},
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
  { path: '**', component: ErrorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
   // useHash: true
});