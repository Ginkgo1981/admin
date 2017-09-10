import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme/services/baMenu/baMenu.service';
import { PAGES_STAFF_MENU } from './pages.menu';
import { MemberService } from "../services/member.service";
import { Member } from "../models/member";
import {GlobalState} from "../global.state";

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right"><i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy;  天马简历 {{ member.identity_type }}</div>
        <ul class="al-share clearfix">
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  constructor(private _menuService:BaMenuService,
              private _member_service:MemberService,
              private _state:GlobalState
  ) {
  }

  member: Member;

  ngOnInit() {
    this.member = this._member_service.getMember();
    console.debug("[pages-component] ngOnInit member:%o", this.member);
    //if (this.member.st === 'Teacher') {
    //  this._menuService.updateMenuByRoutes(<Routes>PAGES_TEACHER_MENU);
    //} else if (this.member.identity_type === 'Staff') {
    //  this._menuService.updateMenuByRoutes(<Routes>PAGES_STAFF_MENU);
    //}
    this._menuService.updateMenuByRoutes(<Routes>PAGES_STAFF_MENU);

    this._state.notifyDataChanged('member.set', this.member);
  }
}




