import {Component} from '@angular/core';
import {ToastService} from 'angular-toastify';
import {IUsers} from 'src/app/models/users.model';
import {PageServices} from 'src/app/services/page.services';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {CustomValidator} from '../../customValidators/customValidator'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  users: IUsers[] | [] = []
  loginCount: number = 0

  constructor(
    private pageService: PageServices,
    private _toastService: ToastService
  ) {
  }

  onLogin(): void {
    console.log(this.loginForm)
    this.loginForm.markAllAsTouched()
    if(this.loginForm.status === 'VALID'){
      this.users = this.pageService.getAllUsers()
      let findUser
      if (this.users.length) {
        findUser = this.users.find((i): IUsers | undefined => {
          if (i.username === this.loginForm.get('username')?.value && i.password === this.loginForm.get('password')?.value) {
            return i
          } else {
            return undefined
          }
        })
        if (findUser) {
          return this.pageService.changePage('home')
        } else {
          this._toastService.error('Invalid Email Or Password');
          if (this.loginCount === 2) {
            this.pageService.changePage('failed-attemps')
          } else {
            this.loginCount++
          }
        }
      }else {
        this._toastService.error('Invalid Email Or Password');
        if (this.loginCount === 2) {
          this.pageService.changePage('failed-attemps')
        } else {
          this.loginCount++
        }
      }
      this.loginForm.reset()
    }
  }

}
