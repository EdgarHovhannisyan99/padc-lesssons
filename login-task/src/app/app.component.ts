import { Component } from '@angular/core';
import { PageServices } from './services/page.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activePage!: string

  constructor(private pageService: PageServices) {
    this.activePage = pageService.getActivePage()
  }

  getPage():string {
    return this.pageService.getActivePage()
  }

}
