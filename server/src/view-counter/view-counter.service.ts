import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import ViewCounter from './veiw-counter.entity';

@Injectable()
export class ViewCounterService {
  constructor(
    @InjectRepository(ViewCounter)
    private viewCounterRepository: Repository<ViewCounter>,
  ) {}

  getViewCounter(): Promise<ViewCounter> {
    return this.viewCounterRepository
      .find()
      .then((ViewCounters: ViewCounter[]) => {
        if (ViewCounters[0]) {
          return ViewCounters[0];
        }
        this.viewCounterRepository.insert(new ViewCounter());
        return this.viewCounterRepository.find()[0];
      });
  }

  getViewCounters(): Promise<ViewCounter[]> {
    return this.viewCounterRepository.find();
  }

  updateViewCounter(): Promise<UpdateResult> {
    return this.getViewCounter().then((viewCounter: ViewCounter) => {
      return this.viewCounterRepository.update(viewCounter, {
        counter: viewCounter.counter + 1,
      });
    });
  }
}

export default ViewCounterService;
