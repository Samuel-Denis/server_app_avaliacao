import { hash } from "bcryptjs";
import { ICreateUser } from "@modules/user/DTOs/createUserDTO";
import { AppError } from "@shared/errors/appError";
import { UserRepository } from '@modules/user/repositories/userRepository';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/user/IRepositories/IUserRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject('UserRepository')  
        private usersRepository: IUserRepository,
    ){}
    async execute({
        name,
        password,
        email,
        avatar
    }: ICreateUser): Promise<void> {
        
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        
        if (userAlreadyExists) {
          throw new AppError('User Already Exists');
        }

     const passwordHash = await hash(password, 8);


        await this.usersRepository.create({
            name: name,
            email: email,
            avatar: avatar,
            password: passwordHash
        })

    }
}

export { CreateUserUseCase }