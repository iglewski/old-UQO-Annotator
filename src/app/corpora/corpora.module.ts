import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisService }         from './crisis.service';

import { CorporaComponent }      from './corpora.component';
import { CorporaHomeComponent }  from './corpora-home.component';
import { CorporaRoutingModule }  from './corpora-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CorporaRoutingModule,
    FormsModule
  ],
  declarations: [
    CorporaComponent,
    CorporaHomeComponent,
    CrisisDetailComponent,
    CrisisListComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CorporaModule {}
