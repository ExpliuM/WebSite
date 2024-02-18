import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import Profile from '../profile/profile.entity';

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  professionalTitle: string;

  @Column()
  title: string;

  @Column()
  workPeriodFrom: string;

  @Column()
  workPeriodTill: string;

  @Column()
  generalDescription: string;

  @ManyToOne(() => Profile, (profile) => profile.experiences, {
    nullable: true,
  })
  profile: Profile;
}

export default Experience;
