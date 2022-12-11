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
  users!: any

  constructor(private pageService: PageServices) {
    this.users = pageService.getAllUsers()
  }

  onRegister(): void {
    this.users.push({usenrame: this.username, email: this.email, password: this.password})
    localStorage.setItem('users', JSON.stringify(this.users))
    this.pageService.changePage('login')
  }


}
