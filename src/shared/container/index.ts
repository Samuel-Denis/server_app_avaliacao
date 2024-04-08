import { container } from 'tsyringe';
import { UserRepository } from '@modules/user/repositories/userRepository';
import { IUserRepository } from '@modules/user/IRepositories/IUserRepository';

import { IUsersTokensRepository } from '@modules/user/IRepositories/IUsersTokensRepository';
import { UsersTokensRepository } from '@modules/user/repositories/UsersTokensRepository';
import { IAssessmentRepository } from '@modules/Assessment/IRepositories/IAssessmentRepository';
import { AssessmentRepository } from '@modules/Assessment/repositories/assessmentRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository', UserRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository', UsersTokensRepository,
);

container.registerSingleton<IAssessmentRepository>(
  'AssessmentRepository', AssessmentRepository
)