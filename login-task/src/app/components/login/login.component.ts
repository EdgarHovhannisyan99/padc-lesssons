import {Component} from '@angular/core';
import {ToastService} from 'angular-toastify';
import {IUsers} from 'src/app/models/users.model';
import {PageServices} from 'src/app/services/page.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string = ''
  public password: string = ''
  public userNameError: boolean = false
  public passwordError: boolean = false
  users: IUsers[] | [] = []
  loginCount: number = 0

  constructor(
    private pageService: PageServices,
    private _toastService: ToastService
  ) {
  }

  onLogin(): void {
    if (!this.username) {
      this.userNameError = true
    }
    if (!this.password) {
      this.passwordError = true
    }
    if (!this.username || !this.password) {
      return
    }
    this.users = this.pageService.getAllUsers()
    let findUser

    if (this.users.length) {
      findUser = this.users.find((i): IUsers | undefined => {
        if (i.username === this.username && i.password === this.password) {
          return i
        } else {
          return undefined
        }
      })
    }

    if (findUser) {
      return this.pageService.changePage('home')
    } else {
      this._toastService.error('Invalid Email Or Password');

      if (this.loginCount === 2) {
        this.pageService.changePage('failed-attemps')
      } else {
        this.loginCount++
        this.username = ''
        this.password = ''
      }
    }
  }


}
