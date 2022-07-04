import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles.css']
})

export class RegisterComponent {

  constructor(private router: Router) {}


    validateRegistration(){
      let userName = (document.getElementById("name") as HTMLInputElement).value;
      let email = (document.getElementById("email") as HTMLInputElement).value;
      let cpf = (document.getElementById("cpf") as HTMLInputElement).value;
      let pis = (document.getElementById("pis") as HTMLInputElement).value;
      let password = (document.getElementById("password") as HTMLInputElement).value;
      let passwordConfirm = (document.getElementById("password-confirm") as HTMLInputElement).value;
      let country = (document.getElementById("country") as HTMLInputElement).value;
      let state = (document.getElementById("state") as HTMLInputElement).value;
      let city = (document.getElementById("city") as HTMLInputElement).value;
      let number = (document.getElementById("number") as HTMLInputElement).value;
      let complement = (document.getElementById("complement") as HTMLInputElement).value;

      if ((userName == "") || (email == "") || (cpf == "") || (pis == "") || (country == "") || (state == "") || (city == "") || (number == "") || (complement == "")) {
        alert("Preencha todos os campos!")
      } else if (password != passwordConfirm) {
        alert("Senhas não conferem!");
      } else {
        alert("Registro Concluído");
        this.router.navigate(['/login'])
      }
    }

}
