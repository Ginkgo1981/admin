import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'ba-messages-list',
  templateUrl: './baMessages.html'
})
export class BaMessages {

  @Input()
  messages:Array<any>;


}

