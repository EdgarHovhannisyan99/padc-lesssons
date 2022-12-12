import { Component } from '@angular/core';
import { PageServices } from 'src/app/services/page.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private pageService: PageServices) {
  }
  onLogOut():void{
    return this.pageService.changePage('login')
  }
}
