import {Component, OnInit} from '@angular/core';
import {TopBarService} from './services/topBarService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuIsClosed!: boolean

  constructor(public topBarService: TopBarService) { }

  ngOnInit(): void {
    this.menuIsClosed = this.topBarService.geTMenuStatus()
  }

  showMenu(): boolean {
    return this.topBarService.geTMenuStatus()
  }
}
