import { AppError } from "@shared/errors/appError";
import { IUserRepository } from "@modules/user/IRepositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { User } from "@prisma/client";


interface IResponse {
        name : string;
        avatar : string;
}

@injectable()
class GetUserUseCase {

    constructor(
        @inject('UserRepository')  
        private usersRepository: IUserRepository,
    ){}
    async execute(id: string): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if(!user){
            throw new AppError("Erro inesperado, tente mais tarde")
        }

        // const userReturn: IResponse = {

        //       name: user.name,
        //       avatar: 
        //     };
      
          return user;

    }

}

export { GetUserUseCase }