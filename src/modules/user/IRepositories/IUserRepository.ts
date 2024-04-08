import { ICreateUser } from "@modules/user/DTOs/createUserDTO";
import { User } from "@prisma/client";

interface IUserRepository {

    create(data: ICreateUser): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    updateUser(user: User): Promise<void>
}

export { IUserRepository }