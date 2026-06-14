import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarFilter } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Output() filterChange = new EventEmitter<CarFilter>();

  marcas: string[] = [];
  filter: CarFilter = {};

  combustiveis = ['Flex', 'Gasolina', 'Etanol', 'Diesel', 'Elétrico', 'Híbrido'];
  cambios = ['Automático', 'Manual', 'CVT', 'Automatizado'];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getMarcas().subscribe(m => this.marcas = m);
  }

  applyFilter() {
    this.filterChange.emit({ ...this.filter });
  }

  clearFilter() {
    this.filter = {};
    this.filterChange.emit({});
  }
}
