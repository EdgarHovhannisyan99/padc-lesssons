import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import {IUsers} from 'src/app/models/users.model';
import {PageServices} from 'src/app/services/page.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required])
  })

  users!: any

  constructor(
    private pageService: PageServices,
    private _toastService: ToastService
  ) {
    this.users = pageService.getAllUsers()
  }

  onRegister(): void {
    this.registerForm.markAllAsTouched()
    if(this.registerForm.status === 'VALID'){
      const findEmail = this.users.find((i : any) => i.username === this.registerForm.get('username')?.value)
      if(findEmail){
        this._toastService.error('Username must be unique')
      }else {
        this.users.push(this.registerForm.value)
        localStorage.setItem('users', JSON.stringify(this.users))
        this.registerForm.reset()
        this.pageService.changePage('login')
      }
    }
  }


}
