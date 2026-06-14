import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
  @Input() car!: Car;
  isFavorite = false;

  constructor(private favService: FavoritesService) {}

  ngOnInit(): void {
    this.favService.favorites$.subscribe(() => {
      this.isFavorite = this.favService.isFavorite(this.car.id);
    });
  }

  toggleFavorite(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.favService.toggle(this.car.id);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  }

  formatKm(km: number): string {
    return km.toLocaleString('pt-BR') + ' km';
  }
}
