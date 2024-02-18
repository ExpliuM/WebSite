import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Skill from './skill.entity';
import Profile from '../general-information/general-information.entity';
import ProfileService from '../profile/profile.service';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,

    @Inject(forwardRef(() => Profile))
    private profileService: ProfileService,
  ) {}
}

export default SkillService;
