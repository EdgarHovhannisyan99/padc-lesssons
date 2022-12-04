import { Component } from '@angular/core';
import { TopBarService } from './services/topBarService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuIsClosed!: boolean
  constructor(menuIsClosed: TopBarService) {
    this.menuIsClosed = menuIsClosed.geTMenuStatus()
  }
}
