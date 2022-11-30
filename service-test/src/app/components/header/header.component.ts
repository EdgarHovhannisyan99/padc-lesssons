import { Component, Input} from '@angular/core';
import { ILinks } from 'src/app/models/models';
import { LinksService } from 'src/app/services/links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  links: Array<ILinks> = []
  constructor(linkServie: LinksService) {
    this.links = linkServie.links
  }
}

