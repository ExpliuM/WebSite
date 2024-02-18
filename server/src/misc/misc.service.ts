import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Misc from './misc.entity';

@Injectable()
export class MiscService {
  constructor(
    @InjectRepository(Misc)
    private miscRepository: Repository<Misc>,
  ) {}
}

export default MiscService;
