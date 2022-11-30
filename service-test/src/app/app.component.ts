import { Component } from '@angular/core';
import { LinksService } from './services/links.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-test';
  links: Array<any> = []
  constructor(links: LinksService) {
    this.links = links.links
  }
}
