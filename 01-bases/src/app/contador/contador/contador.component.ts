import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `<h1>{{title}}</h1>

    <button (click)="acumular(base)">+5</button>
    <button (click)="restar(base)">-5</button>
    <button (click)="restablecer(base)">Reiniciar</button>
    <span>{{numero}}</span>`
})

export class ContadorComponent{
    public title: string = 'Contador App';
    numero:number = 10;
    base:number =5;
  
    acumular(valor:number){
      this.numero+=valor;
    }
    restar(valor:number){
      this.numero-=valor;
    }
    restablecer(valor:number){
      this.numero=valor;
    }
}