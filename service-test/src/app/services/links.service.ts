import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public links = [
    {
      id: 1,
      link: 'https://example.com/',
      title: 'Dashboard',
      checked: true
    },

    {
      id: 2,
      link: 'https://example.com/',
      title: 'Accesses',
      checked: true

    },
    {
      id: 3,
      link: 'https://example.com/',
      title: 'Users',
      checked: true

    },
    {
      id: 4,
      link: 'https://example.com/',
      title: 'Requests',
      checked: true

    },
  ]
}
