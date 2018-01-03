import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http}     from '@angular/http';

import { AppComponent }       from './app.component';
import { routing }            from './app.routing';
import { customHttpProvider } from './_helpers/index';
import { AlertComponent }     from './_directives/index';
import { AuthGuard }          from './_guards/index';
import { AlertService, AuthenticationService, UserService, FsService, articlesService } from './_services/index';
import { HeaderComponent }    from './shared/components';
import { HomeComponent }      from './home/index';
import { HomeWelcomeComponent } from './home-welcome/index';
import { LoginComponent }     from './login/index';
import { RegisterComponent }  from './register/index';

import { HeroesModule }            from './heroes/heroes.module';
import { NotFoundComponent }   from './not-found/not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectComponent }       from './project/index';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeWelcomeComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    ProjectComponent
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
    UserService,
    FsService,
    articlesService,
    {provide: 'apiBase', useValue: 'http://localhost:4000'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
