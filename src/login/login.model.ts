import { Injectable, Inject } from "@nestjs/common";
import { PrismaClient } from '@prisma/client';
import LoginDTO from "./dto";

@Injectable()
export default class LoginModel{
    constructor(@Inject('PrismaInit')private prisma: PrismaClient){}
   
    public async loginUser(data:LoginDTO){
    return await this.prisma.user.create({
     data:{
     username: data.username,
     password: data.password,
     status: data.status,
      }
     })
   }

   public async updateUser(id: number, data: LoginDTO) {
    return await this.prisma.user.update({
      where: { id: id },
      data: {
        username: data.username,
        password: data.password,
        status: data.status,
      },
    });
  }
   /*public async updateUser(data: LoginDTO) {
    return await this.prisma.user.update({
      where: { id: data.id },
      data: {
        username: data.username,
        password: data.password,
        status: data.status,
      }
    })
  }*/

   /*public async updateUser(data: LoginDTO) {
    return await this.prisma.user.update({
      where: { username: data.username },
      data: {
        username: data.username,
        password: data.password,
        status: data.status,
      }
    })
  }*/

  public async getUser() {
    return await this.prisma.user.findMany();
  }

  /*public async deleteUser(username: string) {
    return await this.prisma.user.delete({
      where: { username:username }
    })
  }*/

  public async deleteUser(id :number) {
    return await this.prisma.user.delete({
      where: { id:id },
    });
  }

}
