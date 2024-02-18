import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Profile from '../profile/profile.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Profile, (profile) => profile.skills)
  profile: Profile;

  @Column('simple-array')
  apis: string[];

  @Column('simple-array')
  clouds: string[];

  @Column('simple-array')
  databases: string[];

  @Column('simple-array')
  environments: string[];

  @Column('simple-array')
  operationSystems: string[];

  @Column('simple-array')
  programmingLanguages: string[];

  @Column('simple-array')
  tools: string[];
}

export default Skill;
