import 'reflect-metadata';
import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authenticateRoutes} from './authenticate.routes'
import { assessmentsRoutes } from './assessments.routes'

const router = Router();

router.use('/users', usersRoutes);
router.use('/authenticate', authenticateRoutes);
router.use('/assessments', assessmentsRoutes)

export { router };
