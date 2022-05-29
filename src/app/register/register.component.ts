import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({ templateUrl: 'register.component.html',
styleUrls: ['./register.component.css'] })


export class RegisterComponent implements OnInit{

    form: FormGroup;
    constructor(private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router){}
    ngOnInit(): void {
       
    }

  
    }
