import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChoixClient } from './choixclient';
import { ChoixclientService } from './choixclient.service';
import { Router, RouterModule} from '@angular/router'

@Component({ templateUrl: 'choixclient.component.html',
styleUrls: ['./choixclient.component.css'] })


export class ChoixclientComponent implements OnInit {
    public choixclients: ChoixClient[] = [];
    public choixclient: ChoixClient;
    public _router: Router;
 
  constructor(private choixclientService: ChoixclientService,
    router: Router) {}
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

ajouterRdv(event: any) {
  event.preventDefault();
  this._router.navigate(['ajouterRdv',this.choixclient.id]);
}

test(){
  this._router.navigateByUrl('login')
}
}