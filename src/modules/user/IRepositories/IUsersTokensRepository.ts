import { UsersTokens } from ".prisma/client";
import { ICreateUserTokensDTO } from "../DTOs/ICreateUserTokensDTO";

interface IUsersTokensRepository {

  create({ expires_date, refresh_token, user_id }: ICreateUserTokensDTO): Promise<void>;
  findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UsersTokens>;
  deleteById(id: string): Promise<void>;
  findByRefreshToken(refresh_token: string): Promise<UsersTokens>;
}
export { IUsersTokensRepository };