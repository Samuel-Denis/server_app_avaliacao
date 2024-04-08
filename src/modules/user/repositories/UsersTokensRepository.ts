import { ICreateUserTokensDTO } from "@modules/user/DTOs/ICreateUserTokensDTO";
import { IUsersTokensRepository } from "@modules/user/IRepositories/IUsersTokensRepository";
import { PrismaClient, UsersTokens } from "@prisma/client";


class UsersTokensRepository implements IUsersTokensRepository {

  private prisma = new PrismaClient();

  async create({ expires_date, refresh_token, user_id }: ICreateUserTokensDTO): Promise<void> {



   await this.prisma.usersTokens.create({
      data: {
        expires_date : expires_date,
        refresh_token : refresh_token,
        user_id : user_id,
      }
    })

  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UsersTokens> {
    const usersTokens = await this.prisma.usersTokens.findFirst({
      where: {refresh_token, user_id}
    })

    return usersTokens;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.usersTokens.delete({
      where:{id}
    })
  }

  async findByRefreshToken(refresh_token: string): Promise<UsersTokens> {
    const userToken = await this.prisma.usersTokens.findUnique({
      where: {refresh_token}
    })
    return userToken;
  }


}
export { UsersTokensRepository };