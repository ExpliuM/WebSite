import { Controller } from '@nestjs/common';

import ExperienceService from './experience.service';

@Controller()
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}
}

export default ExperienceController;
