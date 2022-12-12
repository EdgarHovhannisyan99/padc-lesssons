import { Component } from '@angular/core';
import { PageServices } from 'src/app/services/page.services';

@Component({
  selector: 'app-failed-attemps',
  templateUrl: './failed-attemps.component.html',
  styleUrls: ['./failed-attemps.component.scss']
})
export class FailedAttempsComponent {
  constructor(private pageService: PageServices) {
  }

  public changePage(page: string): void {
    return this.pageService.changePage(page)
  }
}
