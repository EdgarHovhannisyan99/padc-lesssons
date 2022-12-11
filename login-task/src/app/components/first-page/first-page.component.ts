import {Component, Output, EventEmitter} from '@angular/core';
import { PageServices } from 'src/app/services/page.services';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  constructor(private pageService: PageServices) {
  }

  public changePage(page: string): void {
    return this.pageService.changePage(page)
  }


}
