import { AppError } from "@shared/errors/appError";
import { IAssessmentRepository } from "@modules/Assessment/IRepositories/IAssessmentRepository";
import { inject, injectable } from "tsyringe";
import { Assessment } from "@prisma/client";


@injectable()
class ListAssessmentsUseCase {

    constructor(
        @inject('AssessmentRepository')  
        private assessmentsRepository: IAssessmentRepository,
    ){}
    async execute(): Promise<Assessment[]> {
        const assessments = await this.assessmentsRepository.find();
      
          return assessments;

    }

}

export { ListAssessmentsUseCase }