import {Component, Input} from "@angular/core";
import { ILinks } from "src/app/models/models";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
 @Input() links: Array<ILinks>

}
