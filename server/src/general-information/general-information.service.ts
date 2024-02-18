import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import GeneralInformation from './general-information.entity';
import Profile from '../profile/profile.entity';
import ProfileService from '../profile/profile.service';

@Injectable()
export class GeneralInformationService {
  constructor(
    @InjectRepository(GeneralInformation)
    private generalInformationRepository: Repository<GeneralInformation>,

    @Inject(forwardRef(() => Profile))
    private profileService: ProfileService,
  ) {}
}

export default GeneralInformationService;
