import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporaHomeComponent } from './corpora-home.component';
import { CrisisListComponent }  from './crisis-list.component';
import { CorporaComponent }     from './corpora.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CanDeactivateGuard }     from '../can-deactivate-guard.service';
import { CrisisDetailResolver }   from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CorporaComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CorporaHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CorporaRoutingModule { }

