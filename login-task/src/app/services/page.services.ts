
export class PageServices {
  public activePage: string = 'first-page'

  getActivePage():string {
    return this.activePage
  }

  changePage(page: string):void {
    this.activePage = page
  }

  public getAllUsers(): null | string | [] {
    let users
    users = localStorage.getItem('users')
    if(users) {
     return  JSON.parse(users)
    }else {
      return []
    }
  }
}
