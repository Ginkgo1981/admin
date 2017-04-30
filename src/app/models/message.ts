export class Message {
  id: Number;
  user_id: Number;
  receiver_id: Number;
  content: String;
  type: String;
  attachment_id: String;
  attachment_type: String;
  created_at: Date;
  student: Student;

}