import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router }        from '@angular/router';


import { HttpModule, Http} from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './shared';

import { HeroesModule }            from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message.component';
import { MainComponent }           from './main.component';
import { PageNotFoundComponent }   from './not-found.component';
import { DialogService }           from './dialog.service';
import { LoginComponent }          from './login/index';
import { HeaderComponent }         from './shared';
import { RegisterComponent }       from './register/index';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComposeMessageComponent,
    MainComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
        }
    }),
    HttpModule,
  ],
    providers: [
      //AuthGuard
      DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
