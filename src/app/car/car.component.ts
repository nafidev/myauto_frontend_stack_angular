import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({ templateUrl: 'car.component.html',
styleUrls: ['car.component.css'] })


export class CarComponent {

    public cars: Car[] = [];
 
  constructor(private carService: CarService) {}
  ngOnInit(): void {
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
}