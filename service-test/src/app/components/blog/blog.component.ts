import {Component} from "@angular/core";
import {CardService} from "../../services/card.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
  data!: any
  constructor(data: CardService) {
    this.data = data.weather
    console.log(this.data)
  }
}
