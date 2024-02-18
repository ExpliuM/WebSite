import { Controller, Get } from '@nestjs/common';

import ProfileService from './profile.service';
import Profile from './profile.entity';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('profile-by-id')
  getProfileById(id: number): Promise<Profile> {
    return this.profileService.findById(id);
  }

  @Get('profiles')
  getProfiles(): Promise<Profile[]> {
    return this.profileService.getProfiles();
  }
}

export default ProfileController;
