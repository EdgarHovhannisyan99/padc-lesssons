import {Component} from '@angular/core'
import { ILinks } from 'src/app/models/models'
import { LinksService } from 'src/app/services/links.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  links: Array<ILinks> = []
  constructor(linkServie: LinksService) {
    this.links = linkServie.links
  }
}
