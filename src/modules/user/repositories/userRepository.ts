import { ICreateUser } from "@modules/user/DTOs/createUserDTO";
import { IUserRepository } from "@modules/user/IRepositories/IUserRepository";
import { PrismaClient, User } from "@prisma/client";
import { AppError } from "@shared/errors/appError";

interface IUser {
    user: User;
    avatar: string[];
}


class UserRepository implements IUserRepository {
    private prisma = new PrismaClient();

    async create({
        name,
        password,
        email,
        avatar,
    }: ICreateUser): Promise<void> {

        try {
            await this.prisma.user.create({
                data: {
                    name: name,
                    password: password,
                    email: email,
                }
            });
            this.prisma.$disconnect
        } catch (error) {
            throw new AppError(`Erro ao criar usuario : ${error}`, 500); 
        }    
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: email
            }
          });
          return user;
        
    }
    async findById(id: string): Promise<User> {      
        const user = await this.prisma.user.findUnique({
            where: {
                id: id
            },
          });
          return user;
    }hng


    async updateUser(user: User): Promise<void>{
        await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                name: user.name,
                password: user.password
            }
        })
    }

}

export { UserRepository, IUser }