import IExperience from "./Experience";
import { IProject } from "./Project";
import { ISkill } from "./Skill";

interface App {
  title: string;
  url: string;
  logoUrl: string;
  description: string;
}

interface SocialMedia {
  name: string;
  link: string;
}


interface User {
  fullName: string;
  currinculumUrl: string;
  picture: string;
  roles: string[];
  aboutMe: string;
  email: string;
  skills: ISkill[];
  socialMedias: SocialMedia[];
}

export interface IProfile {
  app: App;
  user: User;
  experiences?: IExperience[];
  projects?: IProject[];
}
