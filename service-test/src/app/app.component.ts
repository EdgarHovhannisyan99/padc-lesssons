import {Component, Input, OnInit} from '@angular/core';
import { ILinks } from './models/models';
import { LinksService } from './services/links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  showDashboard: boolean = false
  links: Array<ILinks>
  constructor(links: LinksService) {
    this.links = links.links
  }

  onShowDashboard = (): void => {
    this.showDashboard = !this.showDashboard
    console.log(this.showDashboard)
  }

}
