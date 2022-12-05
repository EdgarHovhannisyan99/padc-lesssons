

export class TopBarService {
  private _menuClosed: boolean = false

  constructor() {

  }

  public geTMenuStatus() {
    return this._menuClosed
  }

  public toggleMenu() {
    this._menuClosed = !this._menuClosed
  }
}
