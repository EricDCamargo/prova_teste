import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: any[] = [
    { marca: 'Toyota', modelo: 'Camry', ano: 2020, cor: 'Prata', preco: 25000 },
    { marca: 'Honda', modelo: 'Civic', ano: 2021, cor: 'Azul', preco: 28000 },
    {
      marca: 'Ford',
      modelo: 'Focus',
      ano: 2019,
      cor: 'Vermelho',
      preco: 22000,
    },
    // Adicione mais carros aqui
  ];

  constructor() {}

  ngOnInit() {}
}
