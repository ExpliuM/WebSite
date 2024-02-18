import { Controller } from '@nestjs/common';

import SkillService from './skill.service';

@Controller()
export class SkillController {
  constructor(private readonly skillService: SkillService) {}
}

export default SkillController;
