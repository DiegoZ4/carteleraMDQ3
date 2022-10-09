import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.page.html',
  styleUrls: ['./navigator.page.scss'],
})
export class NavigatorPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.storageService.get('user-cartelera').then( user => {
      this.dataService.token = user.token
    })
  }

}
