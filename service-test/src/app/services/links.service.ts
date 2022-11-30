import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public links = [
    {
      id: 1,
      link: 'home'
    },

    {
      id: 2,
      link: 'About Us'
    },
    {
      id: 3,
      link: 'Contact Us'
    },
  ]
}
