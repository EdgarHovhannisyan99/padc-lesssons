import { Component } from '@angular/core';
import { ILinks } from 'src/app/models/models';
import { LinksServices } from 'src/app/services/linksServices';
import { TopBarService } from 'src/app/services/topBarService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent {
  links: ILinks[]

  constructor(serviceLinks: LinksServices) {
    this.links = serviceLinks.getLinks()
  }
}
