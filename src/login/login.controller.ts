import { Controller, Post, Body, Param, Inject, Put, Get, Delete} from '@nestjs/common';
import { LoginService } from './login.service';
import LoginDTO from './dto';


@Controller('login')
export class LoginController {
    constructor(private service: LoginService){}

    @Post()
    public async getlogin(@Body() data:LoginDTO){
        return await this.service.loginService(data);
    }
 
    @Put(':id')
    public async updateLogin(@Param('id') id: number, @Body() data: LoginDTO) {
      return await this.service.updateLoginService(id, data);
    }

    /* @Put()
    public async updateLogin(@Body() data: LoginDTO) {
        return await this.service.updateLoginService(data);
    }*/

    @Get()
    public async getUser() {
        return await this.service.getUserService();
    }

    @Delete(':id')
    public async deleteLogin(@Param('id') id: number) {
    return await this.service.deleteLoginService(id);
    }

   /* @Delete(':username')
    public async deleteLogin(@Param('username') username: string) {
    return await this.service.deleteLoginService(username);
    }*/
}




