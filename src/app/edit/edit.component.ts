import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../../styles.css']
})
export class EditComponent {

  constructor(private router: Router) { }

  user: any;

  validateNewPassword(){
    let newPassword = (document.getElementById("new-password") as HTMLInputElement).value;
    let newPasswordConfirm = (document.getElementById("new-password-confirm") as HTMLInputElement).value;

    console.log(newPassword, newPasswordConfirm);

    if (newPassword != newPasswordConfirm) {
      alert("Novas Senhas não conferem!");
    } else {
      alert("Dados Atualizados com Sucesso");
      this.router.navigate(['/usuario']);
    }
  }

  confirmDelete(){
    if (confirm("Tem certeza que deseja excluir o usuário? Isso irá apagar todos os dados!")) {
      alert("Usuário Excluído com Sucesso");
      this.router.navigate(['login']);
    }
  }
}
