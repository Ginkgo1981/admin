import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'
import {MemberService} from "../../services/member.service";
import {Member} from "../../models/member";
@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private wxLogin:any;
  private code:String;

  access_token:String;
  openid:String;
  name:String;
  cell:String;
  university_id:Number;
  duty:String;
  sms_code:String;
  invitation_code:String;
  btn_send_sms_text:String = '获取验证码'
  login:Boolean = true

  constructor(private route:ActivatedRoute,
              private router: Router,
              private _member_service:MemberService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(p => {
      if (p.code) {
        this.code = p.code;
        //remove local storage
        localStorage.removeItem('member');
        //remove member
        this._member_service.member = null;
        this._member_service.authorization('', '', this.code, '', '').then(res => {
          console.debug("[login-component] authorization res: %o", res)
          debugger;
          if (res.member) {
            this._member_service.member = res.member;
            localStorage.setItem('member',JSON.stringify(res.member));
            console.debug("[login-component] _member_service member: %o, local storage member: %o", this._member_service.getMember(), JSON.parse(localStorage.getItem('member')))
            //route to dashboard
            this.router.navigate(['/dashboard']);
          } else {
            this.openid = res.openid;
            this.access_token = res.access_token;
            this.login = false;
            console.debug("[login-component] authorization openid: %o, access_token: %o", this.openid, this.access_token)
          }
        })
      } else {
        this.wxLogin = new WxLogin({
          id: "login_container",
          appid: "wx7e0701ab21a46321",
          scope: "snsapi_login",
          redirect_uri: "http://www.gaokao2017.cn/wechat_callback",
          state: ""
        });
      }
    });
  }

  send_sms_code(e) {
    if (this.cell) {
      this._member_service.get_sms_code(this.cell).then(res => {
        console.debug("[login-component] get_sms_code cell: %o, res: %o", this.cell, res)
        if (res.code == 0) {
          this.btn_send_sms_text = '验证码已发';
        }
      })
    }
  }

  register(e) {
    console.debug("[login-component] register openid: %o,access_token: %o, cell: %o, sms_code: %o, name: %o", this.openid, this.access_token, this.cell, this.sms_code, this.name)
    if (this.code && this.cell && this.sms_code) {
      this._member_service.authorization(this.openid, this.access_token, this.code, this.cell, this.sms_code).then(res => {
        console.debug("[login-component] register res: %o", res);
        this.router.navigate(['/dashboard']);
      })
    }
  }
}
