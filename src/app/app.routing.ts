import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { HomeWelcomeComponent } from './home-welcome/index';
import { LoginComponent } from './login/index';
import { NotFoundComponent }   from './not-found/not-found.component';
import { RegisterComponent } from './register/index';
import { ProjectComponent }       from './project/index';

const appRoutes: Routes = [
  { path: 'welcome', component: HomeWelcomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: HomeWelcomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '', component: HomeWelcomeComponent, pathMatch: 'full' },
  { path: 'project', component: ProjectComponent },
  // otherwise page not found
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
