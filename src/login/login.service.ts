import { Injectable } from '@nestjs/common';
import LoginModel from './login.model';
import LoginDTO from './dto';

@Injectable()
export class LoginService {
    constructor(private LoginModel :LoginModel){}
    public async loginService(data:LoginDTO){
        if(true){
        return await this.LoginModel.loginUser(data);
    }
  }

  public async updateLoginService(id: number, data: LoginDTO) {
    if (true) {
      return await this.LoginModel.updateUser(id, data);
    }
  }

  /*public async updateLoginService(data: LoginDTO) {
    if (true) {
      return await this.LoginModel.updateUser(data);
    }
  }*/

  public async getUserService() {
    if (true) {
      return await this.LoginModel.getUser();
    }
  }
  
  public async deleteLoginService(id:number) {
    if (true) {
      return await this.LoginModel.deleteUser(id);
    }
  }

 /* public async deleteLoginService(data: LoginDTO) {
    if (true) {
      return await this.LoginModel.deleteUser(data);
    }
  }*/
}
