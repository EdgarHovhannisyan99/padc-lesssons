import {Component, Input} from "@angular/core";
import {ILinks} from "src/app/models/models";
import {LinksService} from "src/app/services/links.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  links: Array<ILinks>
  showSaveButton: boolean = false

  constructor(links: LinksService) {
    this.links = [...links.links]
  }

  changeText = (key: string, id: number): void => {
    const findLink = this.links.find(i => i.id === id)
    console.log(this.links)
    if (!this.showSaveButton) {
      this.showSaveButton = true
    }
  }

  check = (id: number): void => {
    const index = this.links.findIndex(i => i.id === id)
    this.links[index].checked = !this.links[index].checked
  }

  addLinks = (): void => {
    let nextId = 1
    if (this.links.length) {
     nextId = this.links[this.links.length - 1].id + 1
    }
    this.links.push({
      id: nextId,
      title: '',
      link: '',
      checked: false
    })
  }
}
