import { define } from "typeorm-seeding";

import cvData from "../data/cv-data";
import Profile from "../../server/src/profile/profile.entity";

define(Profile, () => {
  const profile = new Profile();
  profile.name = cvData.name;
  return profile;
});
//
