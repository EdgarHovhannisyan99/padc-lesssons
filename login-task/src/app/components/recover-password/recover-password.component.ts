import {Component} from '@angular/core';
import {ToastService} from 'angular-toastify';
import {PageServices} from 'src/app/services/page.services';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  username: string = ''
  password: string = ''
  public userNameError: boolean = false
  public passwordError: boolean = false

  constructor(private pageService: PageServices, private _toastService: ToastService) {
  }

  onSave(): void {
    if (!this.username) {
      this.userNameError = true
    }
    if (!this.password) {
      this.passwordError = true
    }
    if (!this.username || !this.password) {
      return
    }

    if (this.username && this.password) {
      const users = this.pageService.getAllUsers()
      const findUser = users.findIndex(i => i.username === this.username)
      if (findUser >= 0) {
        users[findUser].password = this.password
        localStorage.setItem('users', JSON.stringify(users))
        this.pageService.changePage('login')
      } else {
        this._toastService.error('Invalid Username');
        setTimeout(() => {
          this.password = ''
          this.username = ''
        }, 10)
      }
    }
  }


}
