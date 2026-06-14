import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car, CarFilter } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = [
    {
      id: 1,
      marca: 'Toyota', modelo: 'Corolla', versao: 'XEi 2.0 Flex',
      ano: 2022, km: 28000, preco: 149900, cor: 'Prata',
      combustivel: 'Flex', cambio: 'Automático', motor: '2.0 Flex 177cv',
      portas: 4, destaque: true, novo: false,
      imagem: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      imagens: [
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80'
      ],
      descricao: 'Toyota Corolla em excelente estado, único dono, revisões feitas na concessionária. Veículo com todos os opcionais de fábrica.',
      opcionais: ['Ar-condicionado digital', 'Central multimídia 8"', 'Câmera de ré', 'Sensor de estacionamento', 'Bancos em couro', 'Keyless entry', 'Controle de cruzeiro']
    },
    {
      id: 2,
      marca: 'Honda', modelo: 'Civic', versao: 'EXL 2.0 CVT',
      ano: 2023, km: 12000, preco: 169900, cor: 'Branco',
      combustivel: 'Flex', cambio: 'CVT', motor: '2.0 Flex 158cv',
      portas: 4, destaque: true, novo: true,
      imagem: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
      imagens: [
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
        'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80'
      ],
      descricao: 'Honda Civic novíssimo, com baixíssima quilometragem. Completo, com garantia de fábrica.',
      opcionais: ['Honda Sensing', 'Teto solar', 'Bancos em couro', 'LED Matrix', 'Câmera 360°', 'Wireless charging', 'Apple CarPlay/Android Auto']
    },
    {
      id: 3,
      marca: 'Volkswagen', modelo: 'T-Cross', versao: 'Highline 1.4 TSI',
      ano: 2022, km: 35000, preco: 139900, cor: 'Cinza',
      combustivel: 'Gasolina', cambio: 'Automático', motor: '1.4 TSI 150cv',
      portas: 4, destaque: false, novo: false,
      imagem: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'],
      descricao: 'VW T-Cross Highline, SUV compacto com excelente espaço interno e tecnologia de ponta.',
      opcionais: ['Teto solar panorâmico', 'Ar digital', 'Sensor de chuva', 'ACC', 'Lane assist', 'Park assist']
    },
    {
      id: 4,
      marca: 'Jeep', modelo: 'Compass', versao: 'Limited 2.0 TD 4x4',
      ano: 2021, km: 48000, preco: 189900, cor: 'Preto',
      combustivel: 'Diesel', cambio: 'Automático', motor: '2.0 Turbodiesel 170cv',
      portas: 4, destaque: true, novo: false,
      imagem: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80'],
      descricao: 'Jeep Compass Limited 4x4, perfeito para quem busca aventura com conforto e luxo.',
      opcionais: ['4x4 com reduzida', 'Teto panorâmico', 'Bancos ventilados', 'Sound system Alpine', 'Câmera 360°', 'HUD']
    },
    {
      id: 5,
      marca: 'Chevrolet', modelo: 'Onix Plus', versao: 'Premier 1.0T',
      ano: 2023, km: 8000, preco: 98900, cor: 'Vermelho',
      combustivel: 'Flex', cambio: 'Automático', motor: '1.0 Turbo 116cv',
      portas: 4, destaque: false, novo: true,
      imagem: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80'],
      descricao: 'Onix Plus Premier, sedã compacto com excelente custo-benefício e baixo consumo.',
      opcionais: ['MyLink com tela 8"', 'Câmera de ré', 'Sensor dianteiro e traseiro', 'Keyless', 'Start/Stop']
    },
    {
      id: 6,
      marca: 'Ford', modelo: 'Territory', versao: 'Titanium 1.5 EcoBoost',
      ano: 2022, km: 41000, preco: 159900, cor: 'Azul',
      combustivel: 'Gasolina', cambio: 'Automático', motor: '1.5 EcoBoost 150cv',
      portas: 4, destaque: false, novo: false,
      imagem: 'https://images.unsplash.com/photo-1568844293986-ca9c5c3f8be3?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1568844293986-ca9c5c3f8be3?w=800&q=80'],
      descricao: 'Ford Territory Titanium, SUV espaçoso e confortável com tecnologia SYNC 3.',
      opcionais: ['SYNC 3', 'Teto panorâmico', 'Câmera 180°', 'Bancos em couro', '7 airbags', 'BLIS']
    },
    {
      id: 7,
      marca: 'Hyundai', modelo: 'HB20S', versao: 'Diamond 1.0T',
      ano: 2023, km: 5000, preco: 89900, cor: 'Branco',
      combustivel: 'Flex', cambio: 'Automático', motor: '1.0 Turbo 120cv',
      portas: 4, destaque: false, novo: true,
      imagem: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'],
      descricao: 'HB20S Diamond, compacto sedã com design renovado e tecnologia moderna.',
      opcionais: ['BlueLink', 'Tela 8"', 'Apple CarPlay', 'Câmera de ré', 'Sensor de estacionamento']
    },
    {
      id: 8,
      marca: 'BMW', modelo: 'X1', versao: 'xDrive25e M Sport',
      ano: 2023, km: 15000, preco: 349900, cor: 'Preta',
      combustivel: 'Híbrido', cambio: 'Automático', motor: '1.5 Turbo Híbrido 220cv',
      portas: 4, destaque: true, novo: false,
      imagem: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80'],
      descricao: 'BMW X1 M Sport híbrido plug-in, o melhor da performance aliado à eficiência energética.',
      opcionais: ['iDrive 8", 10.7"', 'Teto panorâmico', 'Bancos M', 'Harman Kardon', 'Head-up display', 'Câmera 360°', 'Parking assistant']
    },
    {
      id: 9,
      marca: 'Renault', modelo: 'Kwid', versao: 'Zen 1.0 SCe',
      ano: 2022, km: 32000, preco: 62900, cor: 'Laranja',
      combustivel: 'Flex', cambio: 'Manual', motor: '1.0 SCe 66cv',
      portas: 4, destaque: false, novo: false,
      imagem: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'],
      descricao: 'Renault Kwid Zen, econômico e prático para o dia a dia na cidade.',
      opcionais: ['MediaNav 7"', 'Bluetooth', 'USB', 'Ar-condicionado', 'Vidros elétricos']
    },
    {
      id: 10,
      marca: 'Fiat', modelo: 'Pulse', versao: 'Impetus 1.0T AT',
      ano: 2022, km: 27000, preco: 119900, cor: 'Verde',
      combustivel: 'Flex', cambio: 'Automático', motor: '1.0 Turbo 130cv',
      portas: 4, destaque: false, novo: false,
      imagem: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'],
      descricao: 'Fiat Pulse Impetus, SUV compacto com design arrojado e tecnologia Uconnect.',
      opcionais: ['Uconnect 10.1"', 'Wireless charging', 'Câmera 360°', 'Sensor de fadiga', 'ACC', 'Bancos elétricos']
    },
    {
      id: 11,
      marca: 'Toyota', modelo: 'Hilux', versao: 'SRX 2.8 TD 4x4',
      ano: 2021, km: 55000, preco: 249900, cor: 'Branco',
      combustivel: 'Diesel', cambio: 'Automático', motor: '2.8 Turbodiesel 204cv',
      portas: 4, destaque: false, novo: false,
      imagem: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80'],
      descricao: 'Toyota Hilux SRX, a picape mais confiável do mercado com plena capacidade off-road.',
      opcionais: ['Central multimídia 9"', 'Bancos em couro', 'Câmera traseira', 'Controle de descida', 'Diferencial traseiro bloqueável']
    },
    {
      id: 12,
      marca: 'Volkswagen', modelo: 'Golf', versao: 'GTI 2.0 TSI DSG',
      ano: 2022, km: 22000, preco: 219900, cor: 'Cinza',
      combustivel: 'Gasolina', cambio: 'Automático', motor: '2.0 TSI 245cv',
      portas: 4, destaque: true, novo: false,
      imagem: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
      imagens: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80'],
      descricao: 'VW Golf GTI, o hot hatch mais icônico do mundo com esportividade e conforto sem igual.',
      opcionais: ['Virtual Cockpit', 'HUD', 'Teto solar', 'Bancos Recaro', 'DCC', 'Freios Brembo', 'Escape esportivo']
    }
  ];

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCarById(id: number): Observable<Car | undefined> {
    return of(this.cars.find(c => c.id === id));
  }

  getDestaqueCars(): Observable<Car[]> {
    return of(this.cars.filter(c => c.destaque));
  }

  getNewCars(): Observable<Car[]> {
    return of(this.cars.filter(c => c.novo));
  }

  getMarcas(): Observable<string[]> {
    const marcas = [...new Set(this.cars.map(c => c.marca))].sort();
    return of(marcas);
  }

  filterCars(filter: CarFilter): Observable<Car[]> {
    let result = [...this.cars];
    if (filter.busca) {
      const b = filter.busca.toLowerCase();
      result = result.filter(c =>
        c.marca.toLowerCase().includes(b) ||
        c.modelo.toLowerCase().includes(b) ||
        c.versao.toLowerCase().includes(b)
      );
    }
    if (filter.marca) result = result.filter(c => c.marca === filter.marca);
    if (filter.anoMin) result = result.filter(c => c.ano >= filter.anoMin!);
    if (filter.anoMax) result = result.filter(c => c.ano <= filter.anoMax!);
    if (filter.precoMin) result = result.filter(c => c.preco >= filter.precoMin!);
    if (filter.precoMax) result = result.filter(c => c.preco <= filter.precoMax!);
    if (filter.combustivel) result = result.filter(c => c.combustivel === filter.combustivel);
    if (filter.cambio) result = result.filter(c => c.cambio === filter.cambio);
    return of(result);
  }
}
