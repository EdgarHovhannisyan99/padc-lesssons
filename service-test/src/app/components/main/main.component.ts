import {Component} from "@angular/core";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  data: object = {}
  constructor(card: CardService) {
    this.data = card.weather
  }

}
