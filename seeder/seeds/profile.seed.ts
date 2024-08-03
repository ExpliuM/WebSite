import { Seeder, Factory } from "typeorm-seeding";
import { Connection } from "typeorm";

import cv from "../data/cv-data";
import Education from "../../server/src/education/education.entity";
import Experience from "../../server/src/experience/experience.entity";
import Profile from "../../server/src/profile/profile.entity";
import Project from "../../server/src/project/project.entity";

// TODO: seed all data from json to postgres
class CreateProfile implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const profile = new Profile();
    profile.name = cv.name;

    const educationEntities = await Promise.all(
      cv.educations?.map(async (cvEducation) => {
        const projectEntities = await Promise.all(
          cvEducation.projects.map(async (cvProject) => {
            const project = new Project();
            project.courseName = cvProject.courseName;
            project.technology = cvProject.technology;
            project.description = cvProject.description;
            return project;
          })
        );

        const projectInsertResults = await connection
          .createQueryBuilder()
          .insert()
          .into(Project)
          .values(projectEntities)
          .execute();

        const education = new Education();
        education.degree = cvEducation.degree;
        education.institute = cvEducation.institute;
        return education;
      })
    );

    const educationInsertResults = await connection
      .createQueryBuilder()
      .insert()
      .into(Education)
      .values(educationEntities)
      .execute();

    cv.experiences.forEach((cvExperience) => {
      const experience = new Experience();
      experience.companyName = cvExperience.companyName;
      experience.generalDescription = cvExperience.generalDescription;
      experience.professionalTitle = cvExperience.professionalTitle;
    });

    const profileInsertResults = await connection
      .createQueryBuilder()
      .insert()
      .into(Profile)
      .values([profile])
      .execute();

    const profileId = profileInsertResults.identifiers[0].id;
  }
}

export default CreateProfile;
