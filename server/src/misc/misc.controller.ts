import { Controller } from '@nestjs/common';

import MiscService from './misc.service';

@Controller()
export class MiscController {
  constructor(private readonly miscService: MiscService) {}
}

export default MiscController;
