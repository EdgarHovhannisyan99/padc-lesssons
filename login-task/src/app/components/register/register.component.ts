import {Component} from '@angular/core';
import {IUsers} from 'src/app/models/users.model';
import {PageServices} from 'src/app/services/page.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public username: string = ''
  public email: string = ''
  public password: string = ''
  public userNameError: boolean = false
  public emailError: boolean = false
  public passwordError: boolean = false
  users!: any

  constructor(private pageService: PageServices) {
    this.users = pageService.getAllUsers()
  }

  onRegister(): void {
    if (!this.username) {
      this.userNameError = true
    }
    if (!this.password) {
      this.passwordError = true
    }
    if(!this.email){
      this.emailError = true
    }
    if (!this.username || !this.password || !this.email) {
      return
    }
    this.users.push({username: this.username, email: this.email, password: this.password})
    localStorage.setItem('users', JSON.stringify(this.users))
    this.pageService.changePage('login')
  }


}
