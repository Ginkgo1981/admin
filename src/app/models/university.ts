import {Major} from "./majors";
export class University {
  id: Number;
  name: String;
  code: String;
  city: String;
  address: String;
  website: String;
  tel: String;
  brief: String;
  majors: Array<Major>;
  dsin: String;
}