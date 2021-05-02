import { Injectable } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  guadados:Registro[]=[];


  constructor(  private navCtrl:NavController, ) { 

 }

  guardarRegistro(format: string, text:string){

    const nuevoRegistro = new Registro(format,text);
    this.guadados.unshift(nuevoRegistro);
    console.log(this.guadados);
  }

  abriRegistro(registro:Registro){
    this.navCtrl.navigateForward('/tabs/tab2');
    switch( registro.type){

      case 'htpp':
        this.inAppBrowswer.create( registro.text,);
        break;
    }
}
}
 }