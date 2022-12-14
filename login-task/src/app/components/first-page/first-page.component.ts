import {Component, Output, EventEmitter} from '@angular/core';
import { LanguagesPipe } from 'src/app/pipe/languages.pipe';
import { PageServices } from 'src/app/services/page.services';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  constructor(private pageService: PageServices, private langugagePipe: LanguagesPipe) {
  }

  public changePage(page: string): void {
    return this.pageService.changePage(page)
  }




}
