import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http}     from '@angular/http';

import { AppComponent }       from './app.component';
import { routing }            from './app.routing';
import { customHttpProvider } from './_helpers/index';
import { AlertComponent }     from './_directives/index';
import { AuthGuard }          from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HeaderComponent }    from './shared';
import { HomeComponent }      from './home/index';
import { LoginComponent }     from './login/index';
import { RegisterComponent }  from './register/index';

import { HeroesModule }            from './heroes/heroes.module';
import { ComposeMessageComponent } from './compose-message.component';
import { PageNotFoundComponent }   from './not-found.component';
import { DialogService }           from './dialog.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    ComposeMessageComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HeroesModule,
    HttpModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
    providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      customHttpProvider,
      DialogService,
      UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
