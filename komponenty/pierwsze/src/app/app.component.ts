import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pierwsze';
  zmiennaEksport: string[]=['17:00','pływalnią'];

  onOdpowiedz(otrzymane:string){
    alert(otrzymane)
  }
}
