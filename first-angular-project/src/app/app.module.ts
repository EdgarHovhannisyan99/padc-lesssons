import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogComponent} from "../components/blog/blog.component";
import {HeaderComponent} from "../components/header/header.component";
import {BannerComponent} from "../components/banner/banner.component";
import {CardComponent} from "../components/card/card.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        CardComponent,
        BlogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
