import { Component, OnInit, Input,ViewChild,ViewChildren, OnDestroy} from '@angular/core'
import { ActivatedRoute, Params} from '@angular/router'
import { Location } from '@angular/common'
import { ModalDirective } from 'ng2-bootstrap';
import { UsersService } from '../../../../services/users.service'
import { MessagesService } from "../../../../services/messages.service";
//import { NotificationsService } from 'angular2-notifications';
import { StoriesService} from "../../../../services/stories.service";
import { User} from "../../../../models/user";
import { Message} from "../../../../models/message";
import { Student} from "../../../../models/student";
import { DsinService} from "../../../../services/dsin.service";
import { DrawerService, NotificationService } from '@swimlane/ngx-ui';


@Component({
  selector: 'student',
  templateUrl: './student.componet.html',
  styleUrls: ['./student.component.scss'],

})
export class StudentComponent implements OnInit, OnDestroy {
  @ViewChild('ba_send_message_component') ba_send_message_component;
  @ViewChild('ba_messages_list') ba_messages_list;

  student:Student
  messages:Array<Message>;

  toolbarMenu = [
    {
      label: '下发消息',
      click: () => {
        this.ba_send_message_component.showChildModal();
      }
    },
    {
      label: '打标签',
      click: () => {
        this.ba_send_message_component.showChildModal();
      }
    }
  ];

  constructor(private route:ActivatedRoute,
              private location:Location,
              private _users_service:UsersService,
              private notificationService:NotificationService,
              private _messages_service:MessagesService,
              private _story_service:StoriesService,
              private _dsin_service:DsinService) {
  }

  ngOnInit():void {
    let dsin = this.route.params['value']['dsin'];
    this.get_student(dsin)
    //this.load_receive_messages(dsin);
    //this.load_tags(dsin);
  }

  get_student(dsin:String) {
    this._dsin_service.get_by_dsin(dsin).then(res => {
          console.debug("[student-component] get_student dsin: %o, res: %o", dsin, res)
          this.student = res.student
        }
    );
  }

  onTagEvent(event) {
    console.debug("[student-component] onTagEvent event:%o ", event)
    if (event === 'add_tag_succ') {
      this.showNotification('新增标签成功')
    } else if (event === 'delete_tag_succ') {
      this.showNotification('删除标签成功')
    }
  }

  //load_tags(dsin: String) {
  //  this._dsin_service.get_tags(dsin).then(res => {
  //    this.student.tags = res['tags']
  //  })
  //
  //}


  show_message_modal():void {
    this.ba_send_message_component.showChildModal();
  }

  receiveChild(e) {
    console.debug("[student-component] receiveChild e: %o", e)
    if (e === "succ") {
      this.showNotification('信息发送成功');
      this.ba_messages_list.page();
    }
  }

  ngOnDestroy():void {
  }

  menuClicked(e) {
    console.log("==== e")
  }


  showNotification(body:String) {
    this.notificationService.create({
      title: '信息更新提示!',
      body: body,
      styleType: 'success',
      timeout: 10000,
      rateLimit: false
    })
  }


}