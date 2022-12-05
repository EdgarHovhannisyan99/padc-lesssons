import { Component } from '@angular/core';
import { ILinks } from 'src/app/models/models';
import { LinksServices } from 'src/app/services/linksServices';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  links: ILinks[]
  linkService: any

  constructor(serviceLinks: LinksServices) {
    this.links = serviceLinks.getLinks()
    this.linkService = serviceLinks
  }

  linksIsEqual():boolean {
    return JSON.stringify(this.links) === JSON.stringify(this.linkService._links)
  }

  onSave ():void {
    this.linkService.saveLinks(this.links)
  }

}
