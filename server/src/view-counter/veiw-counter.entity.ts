import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ViewCounter {
  constructor() {
    this.counter = 0;
  }

  @PrimaryColumn()
  counter: number;
}

export default ViewCounter;
