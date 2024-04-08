import { Request, Response} from 'express';
import { CreateUserUseCase } from '@modules/user/useCases/Create/createUserUseCase';
import { container } from 'tsyringe';

class CreateUserController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body
        const avatar_file = req.file.filename;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        console.log(name, email, password)

        await createUserUseCase.execute({
            name,
            password,
            email,
            avatar: avatar_file
        });


        return res.status(201).json();
    }
}

export { CreateUserController }