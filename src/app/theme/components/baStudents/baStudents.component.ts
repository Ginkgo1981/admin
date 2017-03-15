import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'ba-students-list',
  templateUrl: './baStudents.html'
})
export class BaStudents {

  @Input()
  students:Array<any>;

}