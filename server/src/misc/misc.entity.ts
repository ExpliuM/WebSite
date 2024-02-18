import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import Profile from '../profile/profile.entity';

@Entity()
export class Misc {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.misc)
  profile: Profile;

  @Column()
  languages: string;

  @Column()
  volunteerPrograms: string;

  @Column()
  certificates: string;
}

export default Misc;
