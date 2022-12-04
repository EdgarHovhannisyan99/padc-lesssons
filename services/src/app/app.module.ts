import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/topBar/topBar.component';
import { DashboradComponent } from './components/dashboard/dashborad.component';
import { MainComponent } from './components/mainContainer/main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TodosComponent } from './components/todos/todos.component';
import { TopBarService } from './services/topBarService';
import { LinksServices } from './services/linksServices';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboradComponent, MainComponent, SettingsComponent, TodosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TopBarService, LinksServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
