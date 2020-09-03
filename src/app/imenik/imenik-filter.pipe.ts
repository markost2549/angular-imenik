import { Pipe, PipeTransform } from '@angular/core';
import { Imenik } from './imenik-list/imenik.model';


@Pipe({
  name: 'imenikFilter'
})
export class ImenikFilterPipe implements PipeTransform {

  transform(imenik: Imenik[], searchTerm: string): Imenik[] {
    if (!imenik || !searchTerm){
      return imenik;
    }
    else {
      return imenik.filter(
        imenikItem => imenikItem.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
  }

}
