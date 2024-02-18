import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Profile from '../profile/profile.entity';

@Entity()
export class GeneralInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  linkedInLink: string;

  @Column()
  phoneNumber: string;

  @OneToOne(() => Profile, (profile) => profile.generalInformation)
  @JoinColumn()
  profile: Profile;
}

export default GeneralInformation;
