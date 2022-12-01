import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})

export class TopBarComponent {
  @Output() showDashboard = new EventEmitter()

  handleDashboard = (): void => {
    this.showDashboard.emit()
  }
}
