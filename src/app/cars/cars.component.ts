import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/shared/models/cars';
import { CarsService } from '../../../src/shared/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Cars[] = [];
  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.getCars();
    console.log(this.cars);
  }

  getCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }
}
