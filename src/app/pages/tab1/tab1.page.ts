import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DatalocalService } from 'src/app/services/datalocal.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  swiperOpts={
   allowSlidePrev: false,
   allowSlideNext:false
  };
  ionViewDidEnter(){
    console.log("ViewDidEnter")
  }
  ionViewDidLeave(){
    console.log("ViewDidLeave")
  }

    ionViewDidLoad(){
      console.log("ViewDidLoa")
    }
    ionViewWillEnter(){
      console.log("ViewWillEnter")
      this.scan(); 
    }
    scan(){
      this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);

        if(!barcodeData.cancelled){
          this.dataLocal.guardarRegistro(barcodeData.format,barcodeData.text);
        }
       }).catch(err => {
           console.log('Error', err);
      
            this.dataLocal.guardarRegistro('QrCode','http://google.com');
       });
    }

  constructor(private barcodeScanner: BarcodeScanner,private dataLocal:DatalocalService) {


  }

}
