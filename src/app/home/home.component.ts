import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {

    message = '';
    constructor( private http: HttpClient){}

    ngOnInit(): void {
    }
}