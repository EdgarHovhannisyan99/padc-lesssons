import {Component, OnInit} from '@angular/core';
import {TopBarService} from 'src/app/services/topBarService';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})
export class TopBarComponent implements OnInit {
  topBar!: boolean

  constructor(public topBarService: TopBarService) {
    this.topBar = topBarService.geTMenuStatus()
  }

  ngOnInit(): void {

  }

  public toggleMenu(): void {
    this.topBarService.toggleMenu()
  }
}
