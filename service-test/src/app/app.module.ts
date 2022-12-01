import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopBarComponent} from "./compnents/topBar/topBar.component";
import {DashboardComponent} from "./compnents/dashboard/dashboard.component";
import {MainComponent} from "./compnents/mainContent/main.component";
import { LinksService } from './services/links.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
