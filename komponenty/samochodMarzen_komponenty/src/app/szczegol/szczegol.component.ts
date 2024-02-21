import { Component,Input } from '@angular/core';
import { Samochod,Rodzaj } from '../interfejs_samochod';

@Component({
  selector: 'app-szczegol',
  templateUrl: './szczegol.component.html',
  styleUrls: ['./szczegol.component.css']
})
export class SzczegolComponent {
  @Input() samochod !: Samochod;
  aktywna:boolean = true;
  pokazZdjecie:boolean=false;
  Rodzaj = Rodzaj;
  
}
