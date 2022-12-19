import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {ToastService} from 'angular-toastify';
import {PageServices} from 'src/app/services/page.services';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {
  recoverForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  username: string = ''
  password: string = ''
  public userNameError: boolean = false
  public passwordError: boolean = false

  constructor(private pageService: PageServices, private _toastService: ToastService) {
  }

  onSave(): void {
    this.recoverForm.markAllAsTouched()
    if (this.recoverForm.status === 'VALID') {
      const users = this.pageService.getAllUsers()
      const findUser = users.findIndex((i: any) => i.username === this.recoverForm.get('username')?.value)
      if (findUser >= 0) {
        users[findUser].password = this.recoverForm.get('password')?.value || ''
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
