import {User} from "./user";
export class Student {
  id: Number;
  province: String;
  city: String;
  school: String;
  dsin: String;
  user: User;
  tags: Array<Tag>;
  sat_score: any;
  sat_province: string;
}