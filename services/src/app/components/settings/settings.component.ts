import {Component, OnInit} from '@angular/core';
import {ILinks} from 'src/app/models/models';
import {LinksServices} from 'src/app/services/linksServices';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  links!: ILinks[]

  constructor(private serviceLinks: LinksServices) {
    this.links = this.serviceLinks.getLinks()
  }

  ngOnInit(): void {
  }

  linksIsEqual(): boolean {
    return JSON.stringify(this.links) === JSON.stringify(this.serviceLinks.getLinks())
  }

  onSave(): void {
    this.serviceLinks.saveLinks(this.links)
  }

}
