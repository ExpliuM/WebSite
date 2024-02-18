import { Controller } from '@nestjs/common';

import EducationService from './education.service';

@Controller()
export class EducationController {
  constructor(private readonly educationService: EducationService) {}
}

export default EducationController;
