import { ICreateAssessment } from "@modules/Assessment/DTOs/createAssessment";
import { IAssessmentRepository } from "@modules/Assessment/IRepositories/IAssessmentRepository";
import { PrismaClient, Assessment } from "@prisma/client";
import { AppError } from "@shared/errors/appError";


class AssessmentRepository implements IAssessmentRepository {
    private prisma = new PrismaClient();

    async create({ type }: ICreateAssessment): Promise<void> {

        try {
            await this.prisma.assessment.create({
                data: {
                    type: type
                }
            });
            this.prisma.$disconnect
        } catch (error) {
            throw new AppError(`Erro ao avaliar : ${error}`, 500); 
        }    
    }
    async find(): Promise<Assessment[]> {
        const assessment = await this.prisma.assessment.findMany();
          return assessment;
        
    }

}

export { AssessmentRepository, Assessment }