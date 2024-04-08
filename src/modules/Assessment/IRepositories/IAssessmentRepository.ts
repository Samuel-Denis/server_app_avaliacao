import { ICreateAssessment } from "@modules/Assessment/DTOs/createAssessment";
import { Assessment } from "@prisma/client";

interface IAssessmentRepository {

    create(data: ICreateAssessment): Promise<void>
    find(): Promise<Assessment[]>
}

export { IAssessmentRepository }