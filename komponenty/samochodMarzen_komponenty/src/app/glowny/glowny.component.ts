import { Component } from '@angular/core';
import { Samochod,Rodzaj } from '../interfejs_samochod';

@Component({
  selector: 'app-glowny',
  templateUrl: './glowny.component.html',
  styleUrls: ['./glowny.component.css']
})
export class GlownyComponent {
  samochody: Samochod[]=
  [
    {
      marka:"McLaren",
      model: "720S",
      zdjecie: "assets/images/mclaren.jpg",
      dane:[
        "do setki 3,5 s",
        "cena 0,5 mln euro"
      ],
    type: Rodzaj.sportowy
    },
    {
      marka:"Hummer",
      model: "H5",
      zdjecie: "assets/images/hummer.jpg",
      dane:[
        "do setki 18 s",
        "cena 250 000 euro"
      ],
    type: Rodzaj.terenowy
    },
    {
      marka:"Mercedes",
      model: "Vario Mobil Signature",
      zdjecie: "assets/images/vario.jpg",
      dane:[
        "do setki 32 s",
        "cena 0,8 mln euro"
      ],
    type: Rodzaj.kamper
    }
  ]
  samochod: Samochod =this.samochody[0];
  kolorb:string="white";
  kolort:string="black";
  aktywna:boolean = true;
 

  zmienKolor()
  {
    this.kolorb=this.kolorb==="white"?"black":"white";
    this.kolort=this.kolort==="black"?"white":"black";
  }
  Rodzaj=Rodzaj;
}
