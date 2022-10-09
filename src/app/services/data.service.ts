import { Injectable, OnInit } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token = '';

  constructor(
    private storageService: StorageService
  ) {}
}
