import { Injectable } from '@angular/core';
import { Cars } from '../models/cars';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: Cars[] = [];
  apiUrl: string = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {}
  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl);
  }
  addCar(newCar: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.apiUrl, newCar);
  }
  editCar(updatedCar: Cars): Observable<Cars> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Cars>(url, updatedCar);
  }
  deleteCar(carId: number): Observable<void> {
    const url = `${this.apiUrl}/${carId}`;
    return this.http.delete<void>(url);
  }
}
