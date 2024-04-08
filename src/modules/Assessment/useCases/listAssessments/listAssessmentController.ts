import { Request, Response } from 'express'
import { container } from 'tsyringe';
import {  ListAssessmentsUseCase } from './listAssessmentsUseCases';

class ListAssessmentsController {
    async handler(req: Request, res: Response): Promise<Response>{
//        const { id } = req.user;

        const listAssessmentsUseCases = container.resolve(ListAssessmentsUseCase); 

        const list = await listAssessmentsUseCases.execute();

        return res.json(list);
    }

}

export { ListAssessmentsController }