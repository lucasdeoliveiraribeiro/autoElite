import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  car: Car | undefined;
  selectedImage = 0;
  isFavorite = false;
  loading = true;
  similares: Car[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService,
    private favService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.carService.getCarById(id).subscribe(car => {
        this.car = car;
        this.loading = false;
        if (!car) { this.router.navigate(['/catalogo']); return; }
        this.isFavorite = this.favService.isFavorite(car.id);
        this.loadSimilares(car);
      });
    });
  }

  loadSimilares(car: Car): void {
    this.carService.filterCars({ marca: car.marca }).subscribe(cars => {
      this.similares = cars.filter(c => c.id !== car.id).slice(0, 3);
    });
  }

  toggleFavorite(): void {
    if (!this.car) return;
    this.favService.toggle(this.car.id);
    this.isFavorite = !this.isFavorite;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  }

  formatKm(km: number): string {
    return km.toLocaleString('pt-BR') + ' km';
  }

  whatsapp(): void {
    if (!this.car) return;
    const msg = encodeURIComponent(`Olá! Tenho interesse no ${this.car.marca} ${this.car.modelo} ${this.car.versao} (${this.car.ano}) por ${this.formatPrice(this.car.preco)}.`);
    window.open(`https://wa.me/5541999999999?text=${msg}`, '_blank');
  }
}
