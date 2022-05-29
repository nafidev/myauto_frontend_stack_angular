import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rendezvous } from '../ajouter-rdv/rendezvous';
import { RendezvousService } from './rendezvous.service';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.css']
})
export class RendezvousComponent implements OnInit {

  public rdvs: Rendezvous[] = [];
  public rdv: Rendezvous

  constructor(private rdvService: RendezvousService,
    private router: Router) 
  {
  
   }

  ngOnInit(): void {
    this.rdvService.getRendezvous();
    this.getrdvs();
  }

  public getrdvs(): void {
    this.rdvService.getRendezvous().subscribe(
      (response: Rendezvous[]) => {
        this.rdvs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );  
}

public deleteRdv(id: number): void {
  this.rdvService.deleteRendezvous(this.rdv.id);
  this.router.navigateByUrl('rendezvous');
}



}
