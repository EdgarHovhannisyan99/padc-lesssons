import {Component} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    public showNumbers: boolean = false

    public showAllNumber = (): void => {
        this.showNumbers = true
    }

    public hideNumbers = (): void => {
        this.showNumbers = false
    }
}
