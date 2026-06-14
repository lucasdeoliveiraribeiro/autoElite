import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarFilter } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  cars: Car[] = [];
  totalCars = 0;
  loading = true;
  currentFilter: CarFilter = {};
  sortBy = 'relevancia';

  sortOptions = [
    { value: 'relevancia', label: 'Relevância' },
    { value: 'preco-asc', label: 'Menor preço' },
    { value: 'preco-desc', label: 'Maior preço' },
    { value: 'ano-desc', label: 'Mais novo' },
    { value: 'km-asc', label: 'Menor km' }
  ];

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentFilter = {};
      if (params['busca']) this.currentFilter.busca = params['busca'];
      if (params['marca']) this.currentFilter.marca = params['marca'];
      this.loadCars();
    });
  }

  loadCars(): void {
    this.loading = true;
    this.carService.filterCars(this.currentFilter).subscribe(cars => {
      this.cars = this.sortCars(cars);
      this.totalCars = cars.length;
      this.loading = false;
    });
  }

  onFilterChange(filter: CarFilter): void {
    this.currentFilter = filter;
    this.loadCars();
  }

  onSortChange(): void {
    this.cars = this.sortCars([...this.cars]);
  }

  private sortCars(cars: Car[]): Car[] {
    switch (this.sortBy) {
      case 'preco-asc': return cars.sort((a, b) => a.preco - b.preco);
      case 'preco-desc': return cars.sort((a, b) => b.preco - a.preco);
      case 'ano-desc': return cars.sort((a, b) => b.ano - a.ano);
      case 'km-asc': return cars.sort((a, b) => a.km - b.km);
      default: return cars.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
    }
  }
}
