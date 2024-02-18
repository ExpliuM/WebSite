import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Education from '../education/education.entity';
import Experience from '../experience/experience.entity';
import GeneralInformation from '../general-information/general-information.entity';
import Skill from '../skill/skill.entity';
import Misc from '../misc/misc.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(
    () => GeneralInformation,
    (generalInformation) => generalInformation.profile,
  )
  @JoinColumn()
  generalInformation: GeneralInformation;

  @OneToMany(() => Experience, (experience) => experience.profile, {
    nullable: true,
  })
  experiences: Experience[];

  @OneToMany(() => Education, (education) => education.profile)
  educations: Education[];

  @OneToMany(() => Skill, (skill) => skill.profile)
  skills: Skill[];

  @OneToOne(() => Misc)
  @JoinColumn()
  misc: Misc;
}

export default Profile;
