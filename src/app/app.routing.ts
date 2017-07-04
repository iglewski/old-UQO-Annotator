import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { ComposeMessageComponent } from './compose-message.component';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { PageNotFoundComponent } from './not-found.component';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  // otherwise page not found
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);