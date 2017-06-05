import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { headerComponent } from './header.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ headerComponent ],
  exports: [ headerComponent ]
})
export class headerModule {}
