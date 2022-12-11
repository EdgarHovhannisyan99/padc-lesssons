import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {PageServices} from './services/page.services'

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    FirstPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PageServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
