import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../theme';

@Pipe({name: 'baExisting'})
export class BaExistingPipe implements PipeTransform {

  transform(input):string {
    let s = (input && input.length > 0) ? "✓" : "";
    return s;
  }
}
