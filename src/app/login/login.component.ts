import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/authentication.service";

@Component({ templateUrl: 'login.component.html',
styleUrls: ['./login.component.css'] })


export class LoginComponent {
    form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  
    constructor(private authService: AuthService, private router: Router) {}
  
    
    

   

    

}
