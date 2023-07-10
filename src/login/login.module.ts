import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import LoginModel from './login.model';

@Module({
  controllers: [LoginController],
  providers: [LoginService, LoginModel],
  imports: [],
  exports: [LoginService],
})
export class LoginModule {}
