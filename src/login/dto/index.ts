import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export default class LoginDTO {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  readonly status: string;
}

/* @IsEmail()
    private email : string;

   @IsString()
    private role : string;*/



