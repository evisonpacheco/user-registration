import { UserInterface } from './../../assets/interfaces/user.interface';
import { UserService } from '../../assets/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['../../styles.css']
})
export class LoggedComponent implements OnInit{

  constructor(private UserService: UserService) { }

  user: any;

  ngOnInit(){
    this.UserService.getUser()
    .then(data => this.user = data)
    .then(() => console.log(this.user))
    .then(error => console.error(error))

  }



}
