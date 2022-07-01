import { UserInterface } from './../../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get<UserInterface[]>(`${API_PATH}user`).toPromise();
  }

}
