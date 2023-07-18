import { Controller, Get, Post } from '@nestjs/common';

import ViewCounter from './veiw-counter.entity';
import ViewCounterService from './view-counter.service';
import { UpdateResult } from 'typeorm';

@Controller()
export class ViewCounterController {
  constructor(private readonly viewCounterService: ViewCounterService) {}

  @Get('view-counter')
  getViewCounter(): Promise<ViewCounter> {
    return this.viewCounterService.getViewCounter();
  }

  @Get('view-counters')
  getViewCounters(): Promise<ViewCounter[]> {
    return this.viewCounterService.getViewCounters();
  }

  @Post('update-view-counter')
  postViewCounter(): Promise<UpdateResult> {
    return this.viewCounterService.updateViewCounter();
  }
}

export default ViewCounterController;
