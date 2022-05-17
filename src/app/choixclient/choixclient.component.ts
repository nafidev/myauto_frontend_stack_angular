import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChoixClient } from './choixclient';
import { ChoixclientService } from './choixclient.service';

@Component({ templateUrl: 'choixclient.component.html',
styleUrls: ['./choixclient.component.css'] })


export class ChoixclientComponent implements OnInit {
    public choixclients: ChoixClient[] = [];
 
  constructor(private choixclientService: ChoixclientService) {}
  ngOnInit(): void {
    this.getChoixclients();
  }

  public getChoixclients(): void {
    this.choixclientService.getChoixclients().subscribe(
      (response: ChoixClient[]) => {
        this.choixclients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );  
}
}