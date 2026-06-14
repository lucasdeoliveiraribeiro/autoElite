import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<number[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  toggle(carId: number): void {
    const current = this.favoritesSubject.value;
    if (current.includes(carId)) {
      this.favoritesSubject.next(current.filter(id => id !== carId));
    } else {
      this.favoritesSubject.next([...current, carId]);
    }
  }

  isFavorite(carId: number): boolean {
    return this.favoritesSubject.value.includes(carId);
  }

  count(): number {
    return this.favoritesSubject.value.length;
  }
}
