import { ILinks } from "../models/models"


export class LinksServices {
  private _links = [
    {title: 'Home', link: 'https://example.com/home', isActive: true},
    {title: 'Contact Us', link: 'https://example.com/contact', isActive: true},
    {title: 'About Us', link: 'https://example.com/about', isActive: true},
    {title: 'Login', link: 'https://example.com/login', isActive: true},
  ]

  constructor() {
  }

  getLinks() {
    return JSON.parse(JSON.stringify(this._links))
  }

  saveLinks(data: ILinks[]) {
    console.log(data)
  }
}
