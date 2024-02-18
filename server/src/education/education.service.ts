import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Education from './education.entity';
import Profile from '../general-information/general-information.entity';
import ProfileService from '../profile/profile.service';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private cvRepository: Repository<Education>,

    @Inject(forwardRef(() => Profile))
    private profileService: ProfileService,
  ) {}
}

export default EducationService;
