import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles.css']
})

export class LoginComponent {

  constructor(private router: Router) { }

  validateLogin(){
    let email = (document.getElementById("email-login") as HTMLInputElement).value;
    let cpf = (document.getElementById("cpf-login") as HTMLInputElement).value;
    let pis = (document.getElementById("pis-login") as HTMLInputElement).value;
    let password = (document.getElementById("password-login") as HTMLInputElement).value;

    if ((email == "") && (cpf == "") && (pis == "")) {
      alert("Escolha pelo menos uma forma de Login!");
    } else if (password == "") {
      alert("Preencha o campo senha!")
    } else {
      this.router.navigate(['/usuario']);
    }
  }
}
