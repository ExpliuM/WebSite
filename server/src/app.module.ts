import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Education from './education/education.entity';
import Experience from './experience/experience.entity';
import GeneralInformation from './general-information/general-information.entity';
import Misc from './misc/misc.entity';
import Profile from './profile/profile.entity';
import ProfileController from './profile/profile.controller';
import ProfileService from './profile/profile.service';
import Skill from './skill/skill.entity';
import User from './user/user.entity';
import UsersController from './user/users.controller';
import UsersService from './user/users.service';
import ViewCounter from './view-counter/veiw-counter.entity';
import ViewCounterController from './view-counter/view-counter.controller';
import ViewCounterService from './view-counter/view-counter.service';
import { Project } from './project/project.entity';
import ProjectController from './project/project.controller';
import ProjectService from './project/project.service';

const entities = [
  Education,
  Experience,
  GeneralInformation,
  Misc,
  Profile,
  Project,
  Skill,
  User,
  ViewCounter,
];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      database: 'root',
      entities: entities,
      host: 'localhost',
      password: 'explium',
      port: 5432,
      synchronize: true,
      type: 'postgres',
      username: 'explium',
    }),
    TypeOrmModule.forFeature(entities),
    forwardRef(() => Project),
    forwardRef(() => Education),
    forwardRef(() => Experience),
    forwardRef(() => GeneralInformation),
  ],
  controllers: [
    ProfileController,
    ProjectController,
    UsersController,
    ViewCounterController,
  ],
  providers: [ProfileService, ProjectService, UsersService, ViewCounterService],
})
export class AppModule {}
