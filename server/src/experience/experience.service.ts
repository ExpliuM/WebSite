import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Experience from './experience.entity';
import Profile from '../general-information/general-information.entity';
import ProfileService from '../profile/profile.service';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private experienceRepository: Repository<Experience>,

    @Inject(forwardRef(() => Profile))
    private profileService: ProfileService,
  ) {}
}

export default ExperienceService;
