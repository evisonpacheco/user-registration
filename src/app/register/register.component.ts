import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles.css']
})

export class RegisterComponent {

  validatePassword(){
    let password = (document.getElementById("password") as HTMLInputElement).value;
    let passwordConfirm = (document.getElementById("password-confirm") as HTMLInputElement).value;

    console.log(password, passwordConfirm)
      if (password != passwordConfirm) {
        alert("Senhas não conferem!");
      }
    }

}
