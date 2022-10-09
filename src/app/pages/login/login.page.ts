import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpServiceService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    var data = { 'data': {'username': this.form.controls['username'].value, 'password': this.form.controls['password'].value} }
    console.log(data)
    this.httpService.login(data)
        .subscribe( (resp: any) => {
          console.log( resp.data.user )
          this.storageService.set('user-cartelera', resp.data.user);
          this.router.navigate(['/navigator'])
        })
  }

}
