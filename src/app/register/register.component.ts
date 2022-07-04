import { UserInterface } from './../../assets/interfaces/user.interface';
import { Component } from '@angular/core';
import { UserService } from 'src/assets/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles.css']
})

export class RegisterComponent {

  constructor(private UserService: UserService) { }

    validate(){
      let password = (document.getElementById("password") as HTMLInputElement).value;
      let passwordConfirm = (document.getElementById("password-confirm") as HTMLInputElement).value;

    console.log(password, passwordConfirm)
      if (password != passwordConfirm) {
        alert("Senhas não conferem!");
      }
    }
}
