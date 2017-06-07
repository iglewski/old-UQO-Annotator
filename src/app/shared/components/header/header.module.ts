import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { headerComponent } from './header.component';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ headerComponent ],
  exports: [ headerComponent ]
})
export class headerModule {}
