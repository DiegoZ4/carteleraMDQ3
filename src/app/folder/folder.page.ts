import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpServiceService } from '../services/http-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { DataService } from '../services/data.service';

declare var cordova:any;

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  printerOk = false;

  user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private storageService: StorageService,
    private dataService: DataService
  ) {
    this.platform.ready().then(
      ready => {
        console.log('Platform Ready', ready);
        console.log( cordova.plugins );
        this.settingPrinter();
      }
    )
  }

  settingPrinter() {
    cordova.plugins.bixolonPrint.settings = {
      lineFeed: 1,
      formFeed: false, // enable\disable jump to next position, in black marker and label modes
      autoConnect: true, // Android only: if this is set to false displays a dialog box for selecting the printer
      toastMessage: true, // Android only: show a printer message
      separator: '=',
      codePage: cordova.plugins.bixolonPrint.CodePage.CP_1252_LATIN1 // define code page, default value is set to CP_1252_LATIN1.
    };

    cordova.plugins.bixolonPrint.startConnectionListener(
      function(response) {
          this.printerOk = true;
          console.log('Printer: connect success');
      },
      function(error) {
          console.error('Printer: connect fail', error);
          // Hay q reintentar
          
      }
  );
  }

  ngOnInit() {
    this.storageService.get('user-cartelera').then( user => {
      this.user = user;
      console.log( this.user )
    })
  }


  onClick() {
    console.log('Imprimi loco');

    cordova.plugins.bixolonPrint.addLine({
      text: "CARTELERA MDQ 3 - New Version!\r\n",
      textAlign: "center",
      fontStyle: "bold",
      fontType: 'A'
    });


    cordova.plugins.bixolonPrint.printText(
      function(success) {
        alert("Printer: print text success");
    },
    function(fail) {
        alert("Printer: print text fail");
    }
    )
  }

}
