import { Controller } from '@nestjs/common';

import ProjectService from './project.service';

@Controller()
export class ProjectController {
  constructor(private readonly educationService: ProjectService) {}
}

export default ProjectController;
