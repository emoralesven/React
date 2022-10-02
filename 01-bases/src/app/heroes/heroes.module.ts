import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component"; 
import { ListadotaComponent } from '../heroes/listadota/listadota.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadotaComponent
    ],

    exports:[
        ListadotaComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule
    ]

})
export class HeroesModule{

}