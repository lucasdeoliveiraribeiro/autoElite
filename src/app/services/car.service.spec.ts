import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarService } from './car.service';
import { CarFilter } from '../models/car.model';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService]
    });
    service = TestBed.inject(CarService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar lista de carros', (done) => {
    service.getCars().subscribe(cars => {
      expect(cars.length).toBeGreaterThan(0);
      done();
    });
  });

  it('deve retornar carro pelo id', (done) => {
    service.getCarById(1).subscribe(car => {
      expect(car).toBeDefined();
      expect(car?.id).toBe(1);
      done();
    });
  });

  it('deve retornar undefined para id inexistente', (done) => {
    service.getCarById(9999).subscribe(car => {
      expect(car).toBeUndefined();
      done();
    });
  });

  it('deve filtrar por marca', (done) => {
    const filter: CarFilter = { marca: 'Toyota' };
    service.filterCars(filter).subscribe(cars => {
      expect(cars.every(c => c.marca === 'Toyota')).toBeTrue();
      done();
    });
  });

  it('deve filtrar por busca textual', (done) => {
    const filter: CarFilter = { busca: 'civic' };
    service.filterCars(filter).subscribe(cars => {
      expect(cars.some(c => c.modelo.toLowerCase().includes('civic'))).toBeTrue();
      done();
    });
  });

  it('deve retornar carros em destaque', (done) => {
    service.getDestaqueCars().subscribe(cars => {
      expect(cars.every(c => c.destaque)).toBeTrue();
      done();
    });
  });

  it('deve retornar lista de marcas únicas ordenadas', (done) => {
    service.getMarcas().subscribe(marcas => {
      const sorted = [...marcas].sort();
      expect(marcas).toEqual(sorted);
      expect(new Set(marcas).size).toBe(marcas.length);
      done();
    });
  });
});
