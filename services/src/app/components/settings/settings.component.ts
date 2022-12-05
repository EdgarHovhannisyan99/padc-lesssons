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
  }

  onCheck(index: number): void {
    this.links[index].isActive = !this.links[index].isActive
  }

  ngOnInit(): void {
    this.links = this.serviceLinks.getLinks()
  }

  linksIsEqual(): boolean {
    return JSON.stringify(this.links) === JSON.stringify(this.serviceLinks.getLinks())
  }

  onSave(): void {
    console.log(this.links)
    // this.serviceLinks.saveLinks()
  }

}
