import { IsEmail, IsNotEmpty, IsString, IsNumber } from "class-validator";

export default class LoginDTO{
    @IsString()
     readonly username : string;

    @IsString()
     readonly password : string;

    @IsString()
     readonly status : string;
     
    @IsNumber()
    readonly  id: number;



/* @IsEmail()
    private email : string;

   @IsString()
    private role : string;*/



}