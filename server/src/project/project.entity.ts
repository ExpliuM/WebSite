import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

import Education from '../education/education.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  @Column()
  description: string;

  @Column()
  technology: string;

  @ManyToOne(() => Education, (education) => education.projects, {
    nullable: true,
  })
  education: Education;
}

export default Project;
