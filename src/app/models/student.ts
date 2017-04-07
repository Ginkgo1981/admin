import {User} from "./user";
import {Tag} from "./tag";
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