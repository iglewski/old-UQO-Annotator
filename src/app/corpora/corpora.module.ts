import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisService }         from './crisis.service';

import { CorporaComponent }      from './corpora.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CorporaHomeComponent }  from './corpora-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { CorporaRoutingModule }  from './corpora-routing.module';

declare var require: any;
var fs = require("fs");

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
//app = express();
export class CorporaModule {

  //app.use("/", express.static(__dirname));
//  fs = require("fs");
/*
   getCorpora (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
      var name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()){
        getFiles(name, files_);
      } else {
        files_.push(name);
      }
    }
    return files_;
  }*/
}

