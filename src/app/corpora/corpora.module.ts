import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisService }        from './crisis.service';

import { CorporaComponent }     from './corpora.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CorporaHomeComponent } from './corpora-home.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import { CorporaRoutingModule } from './corpora-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CorporaRoutingModule
  ],
  declarations: [
    CorporaComponent,
    CrisisListComponent,
    CorporaHomeComponent,
    CrisisDetailComponent
  ],
  providers: [
    CrisisService
  ]
})
export class CorporaModule {}
