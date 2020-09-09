import { Pipe, PipeTransform } from '@angular/core';
import { Imenik } from './imenik.model';

@Pipe({
  name: 'imenikFilter',
})
export class ImenikFilterPipe implements PipeTransform {
  transform(imenik: Imenik[], searchTerm: string): Imenik[] {
    if (!imenik || !searchTerm) {
      return imenik;
    }

    searchTerm = searchTerm.toLowerCase();

    return imenik.filter((imenikItem) => {
      let imenikNaziv = false;
      let imenikOdeljenje = false;
      let imenikLokacija = false;
      let imenikBroj = false;

      if (imenikItem.naziv !== null) {
        // console.log(imenikItem.naziv);
        imenikNaziv = imenikItem.naziv.toLowerCase().includes(searchTerm);
      }

      if (imenikItem.odeljenje !== null) {
        imenikOdeljenje = imenikItem.odeljenje
          .toLowerCase()
          .includes(searchTerm);
      }

      if (imenikItem.lokacija !== null) {
        imenikLokacija = imenikItem.lokacija.toLowerCase().includes(searchTerm);
      }

      if (imenikItem.broj !== null) {
        imenikBroj = imenikItem.broj.toLowerCase().includes(searchTerm);
      }

      // console.log(imenikNaziv, imenikOdeljenje, imenikLokacija, imenikBroj);
      return imenikNaziv || imenikOdeljenje || imenikLokacija || imenikBroj;

      // return imenikItem.naziv.toLowerCase().includes(searchTerm);
    });
  }
}
