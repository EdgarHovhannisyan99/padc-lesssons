import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public navLinks = ['Todos', 'Settings']
  public activePage = 0

  changePage(index: number):void {
    this.activePage = index
  }
}
