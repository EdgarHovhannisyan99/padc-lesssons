import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component'
import {FooterComponent} from './components/footer/footer.component'
import { LinksService } from './services/links.service';
import {CardService} from "./services/card.service";
import {MainComponent} from "./components/main/main.component";
import {BlogComponent} from "./components/blog/blog.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LinksService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
