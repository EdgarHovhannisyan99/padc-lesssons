import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PageServices} from './services/page.services';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { FailedAttempsComponent } from './components/failed-attemps/failed-attemps.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { HomeComponent } from './components/home/home.component';
import {LanguagesPipe} from './pipe/languages.pipe'

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    FirstPageComponent,
    LoginComponent,
    RegisterComponent,
    FailedAttempsComponent,
    RecoverPasswordComponent,
    HomeComponent,
    LanguagesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularToastifyModule
  ],
  providers: [PageServices, ToastService, LanguagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
