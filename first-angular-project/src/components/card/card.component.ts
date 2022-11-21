import {Component, Input} from "@angular/core";
import { ICard } from "src/models";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
 @Input() card: ICard


}
