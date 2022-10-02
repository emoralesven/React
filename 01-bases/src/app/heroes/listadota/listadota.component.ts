import { Component } from '@angular/core';

@Component({
  selector: 'app-listadota',
  templateUrl: './listadota.component.html',
  styleUrls: ['./listadota.component.css']
})
export class ListadotaComponent  {

 heroes: string [] = ['Hukl','Spidemarn','Dr Strange','Thor']
 lastHero: string='';
 borrarHeroe(){
  const [first] = this.heroes;
  this.lastHero = first
  this.heroes.shift();
 }
}
