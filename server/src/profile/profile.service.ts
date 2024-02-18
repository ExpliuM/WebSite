// import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Profile from './profile.entity';
// import Education from '../education/education.entity';
// import EducationService from '../education/education.service';
// import Experience from '../experience/experience.entity';
// import ExperienceService from '../experience/experience.service';
// import GeneralInformation from '../general-information/general-information.entity';
// import GeneralInformationService from '../general-information/general-information.service';

// @Inject(forwardRef(() => Education))
// private educationService: EducationService,
// @Inject(forwardRef(() => Experience))
// private experienceService: ExperienceService,
// @Inject(forwardRef(() => GeneralInformation))
// private generalInformationService: GeneralInformationService,
// import cvData from '../../data/cv-data';

const defaultProfile: Profile = new Profile();

const defaultProfiles: Profile[] = [defaultProfile];

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  create(): Promise<Profile>[] {
    return defaultProfiles.map(async (profile) => {
      return await this.profileRepository
        .findOneBy({ name: profile.name })
        .then(async (profile) => {
          if (profile) {
            return Promise.resolve(null);
          }
          return Promise.resolve(this.profileRepository.save(profile));
        })
        .catch((error) => Promise.reject(error));
    });
  }

  getProfiles(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findById(id: number): Promise<Profile> {
    return this.profileRepository.findBy({ id })[0];
  }
}

export default ProfileService;
