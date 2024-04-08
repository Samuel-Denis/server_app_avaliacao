
import { ICreateAssessment } from "@modules/Assessment/DTOs/createAssessment";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";
import { IAssessmentRepository } from "@modules/Assessment/IRepositories/IAssessmentRepository";

@injectable()
class CreateAssessmentUseCase {

    constructor(
        @inject('AssessmentRepository')  
        private assessmentRepository: IAssessmentRepository,
    ){}
    async execute({ type }: ICreateAssessment): Promise<void> {

        await this.assessmentRepository.create({
          type: type
        });

    }
}

export { CreateAssessmentUseCase }