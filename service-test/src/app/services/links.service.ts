import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public links = [
    {
      id: 1,
      link: 'https://example.com/',
      title: 'Dashboard'
    },

    {
      id: 2,
      link: 'https://example.com/',
      title: 'Accesses'
    },
    {
      id: 3,
      link: 'https://example.com/',
      title: 'Users'
    },
    {
      id: 4,
      link: 'https://example.com/',
      title: 'Requests'
    },
  ]
}
