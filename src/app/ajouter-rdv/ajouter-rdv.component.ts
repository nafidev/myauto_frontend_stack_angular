import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChoixClient } from '../choixclient/choixclient';
import { ChoixclientService } from '../choixclient/choixclient.service';
import { RendezvousService } from '../rendezvous/rendezvous.service';
import { Rendezvous } from './rendezvous';

@Component({
  selector: 'app-ajouter-rdv',
  templateUrl: './ajouter-rdv.component.html',
  styleUrls: ['./ajouter-rdv.component.css']
})
export class AjouterRdvComponent implements OnInit {
  
  public choixclients: ChoixClient[] = [];
    public choixclient: ChoixClient;

  constructor(private choixclientService: ChoixclientService,
    private rdvService: RendezvousService) { }

  rdvForm = new FormGroup({
    
    nomclient: new FormControl(),
    telclient: new FormControl(),
    nomcommercial: new FormControl,
    idchoix: new FormControl(),
    telcommercial: new FormControl(),
    daterdv: new FormControl(),
    
})

  ngOnInit(): void {
    this.choixclientService.getChoixclients();
    
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



onAddrdv(rdvForm: FormGroup){
  this.rdvService.addRendezvous(rdvForm.value).subscribe(
    (response: Rendezvous) => {
        console.log(response);
    },
    (error: HttpErrorResponse) => {
        alert(error.message);
    }
)


}

}
