import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newarray = value.split(" ");
    for(let i=0;i<newarray.length;i++){
      newarray[i] = newarray[i].charAt(0).toUpperCase() + newarray[i].slice(1);
    }
    let finished = '';
    for(let i=0;i<newarray.length;i++){
      if(i != newarray.length)
      finished+= newarray[i] + " ";
    }
    return finished;
  }

}
