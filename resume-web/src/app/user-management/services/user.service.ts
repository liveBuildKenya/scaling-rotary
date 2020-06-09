import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RegisterUserModel } from '../models/register-user.model';
import { environment } from 'src/environments/environment';
import { LoginUserModel } from '../models/login-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  registerUser(newUser: RegisterUserModel) {
    return this.httpClient.post(`${environment.api_url}user/register`, newUser);
  }

  loginUser(user: LoginUserModel) {
    return this.httpClient.post(`${environment.api_url}authentication/login`, user);
  }

  async getUserById(id: string) {
    return this.httpClient.get(`${environment.api_url}user/${id}`);
  }

}
