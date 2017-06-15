import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router }        from '@angular/router';


import { HttpModule, Http}     from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent }      from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { AppConfig }         from './app.config';

import { AlertComponent }    from './_directives/index';
import { AuthGuard }         from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { LoginComponent }    from './login/index';
import { HomeComponent }     from './home/index';
import { RegisterComponent } from './register/index';
import { HeaderComponent }   from './shared';

import { HeroesModule }            from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent }   from './not-found.component';
import { DialogService }           from './dialog.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ComposeMessageComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
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
      AppConfig,
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService,
      DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
