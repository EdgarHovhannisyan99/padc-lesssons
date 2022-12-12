import { IUsers } from "../models/users.model"

export class PageServices {
  public activePage: string = 'recover-password'

  getActivePage(): string {
    return this.activePage
  }

  changePage(page: string): void {
    this.activePage = page
  }

  public getAllUsers(): IUsers[] | [] {
    let users
    users = localStorage.getItem('users')
    if (users) {
      return JSON.parse(users)
    } else {
      return []
    }
  }


}
