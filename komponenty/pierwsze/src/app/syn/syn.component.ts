import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent {
  @Input() zmiennaImport!:string[];
  @Output() odpowiedz = new EventEmitter<string>();

  wyslanie(){
    this.odpowiedz.emit('Bede czekał');
  }

}
