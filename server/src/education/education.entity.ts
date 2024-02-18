import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Profile } from '../profile/profile.entity';
import { Project } from '../project/project.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  institute: string;

  @Column()
  degree: string;

  @OneToMany(() => Project, (project) => project.education)
  projects: Project[];

  @ManyToOne(() => Profile, (profile) => profile.educations)
  profile: Profile;
}

export default Education;
