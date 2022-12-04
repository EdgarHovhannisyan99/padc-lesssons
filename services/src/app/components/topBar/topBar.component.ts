import {Component, OnInit} from '@angular/core';
import {TopBarService} from 'src/app/services/topBarService';

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})
export class TopBarComponent implements OnInit {
  topBar!: any

  constructor(close: TopBarService) {
    this.topBar = close
  }

  ngOnInit(): void {
  }

  public toggleMenu(): void {
    this.topBar.toggleMenu()
  }
}
