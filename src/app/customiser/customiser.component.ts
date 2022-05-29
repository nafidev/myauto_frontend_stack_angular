import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Car } from "../car/car";
import { CarService } from "../car/car.service";
import { ChoixClient } from "../choixclient/choixclient";
import { ChoixclientService } from "../choixclient/choixclient.service";



@Component({ templateUrl: 'customiser.component.html',
styleUrls: ['./customiser.component.css'] })


export class CustomiserComponent implements OnInit {

    public cars: Car[] = [];
    public router: Router;


    constructor(private choixclientService: ChoixclientService,
        private carService: CarService,
        router: Router) {}
        
    customiserForm = new FormGroup({
        //Client
        nom: new FormControl(),
        prenom: new FormControl(),
        tel: new FormControl,
        //Voiture
        nomVoiture: new FormControl(),
        couleur: new FormControl(),
        jantes: new FormControl(),
        pneus: new FormControl(),
        typeVerre: new FormControl(),
        siege: new FormControl(),
    })

   
    ngOnInit(): void {
      this.choixclientService.getChoixclients();
      this.getCars();
    }

    public getCars(): void {
        this.carService.getCars().subscribe(
          (response: Car[]) => {
            this.cars = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );  
    }

    

    public onAddChoixclient(customiserForm: FormGroup): void{

        this.choixclientService.addChoixclients(customiserForm.value).subscribe(
            (response: ChoixClient) => {
                console.log(response);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )

        this.router.navigateByUrl('choixclient')
    }
    
}