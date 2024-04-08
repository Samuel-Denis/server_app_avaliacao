import { Router } from "express";
import { CreateAssessmentController } from "@modules/Assessment/useCases/createAssessment/createAssessmentController";

//import multer from "multer";
import { ensureAuthenticated } from "../middlewares/ensureAthenticare";
import { ListAssessmentsController } from "@modules/Assessment/useCases/listAssessments/listAssessmentController"
import { RefreshTokenController } from "@modules/user/useCases/refreshToken/RefreshTokenController";
const assessmentsRoutes = Router();

const assessmentControler = new CreateAssessmentController()
const getAssessment = new ListAssessmentsController();

assessmentsRoutes.post('/', assessmentControler.handler)

assessmentsRoutes.get('/', getAssessment.handler);

export { assessmentsRoutes };
