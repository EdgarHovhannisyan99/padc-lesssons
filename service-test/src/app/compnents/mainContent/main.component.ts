import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  showToDos: boolean = false

  changeShow = (title: string): void => {
    if(title === 'TODOS'){
      this.showToDos = true
    }else {
      this.showToDos = false
    }
  }
}
