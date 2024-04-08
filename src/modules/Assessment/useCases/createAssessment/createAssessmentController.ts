import { Request, Response} from 'express';
import { CreateAssessmentUseCase } 
         from '@modules/Assessment/useCases/createAssessment/createAssessmentUseCase';
import { container } from 'tsyringe';

class CreateAssessmentController {
    async handler(req: Request, res: Response): Promise<Response> {
        const { type } = req.body

        const createAssessmentUseCase = container.resolve(CreateAssessmentUseCase);

        await createAssessmentUseCase.execute({type: type});

        return res.status(201).json("Avaliação registrada");
    }
}

export { CreateAssessmentController }