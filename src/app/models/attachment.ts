export class Attachment {
  attachment_id: Number;
  attachment_type: String;

  constructor(_attachment_id:Number, _attachment_type: String){
    this.attachment_id = _attachment_id
    this.attachment_type = _attachment_type
  }

}