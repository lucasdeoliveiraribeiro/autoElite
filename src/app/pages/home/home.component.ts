import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  destaques: Car[] = [];
  novidades: Car[] = [];

  marcasDestaque = [
    { nome: 'Toyota', logo: '🏆', modelos: 120 },
    { nome: 'Honda', logo: '🎯', modelos: 98 },
    { nome: 'Volkswagen', logo: '⚙️', modelos: 145 },
    { nome: 'BMW', logo: '⭐', modelos: 67 },
    { nome: 'Jeep', logo: '🌄', modelos: 54 },
    { nome: 'Chevrolet', logo: '🔥', modelos: 88 }
  ];

  features = [
    { icon: '✅', title: 'Laudo garantido', desc: 'Todos os veículos com vistoria completa' },
    { icon: '💳', title: 'Múltiplas formas', desc: 'Financiamento, consórcio ou à vista' },
    { icon: '🔒', title: 'Segurança total', desc: 'Documentação 100% regularizada' },
    { icon: '🚗', title: 'Test drive', desc: 'Agende seu test drive gratuitamente' }
  ];

  steps = [
    { icon: '🔍', title: 'Escolha seu veículo', desc: 'Navegue pelo nosso catálogo com filtros avançados e encontre o carro ideal.' },
    { icon: '📞', title: 'Entre em contato', desc: 'Fale conosco pelo WhatsApp ou telefone e tire todas as suas dúvidas.' },
    { icon: '🚗', title: 'Faça o test drive', desc: 'Venha conhecer pessoalmente e dar uma volta no seu futuro carro.' },
    { icon: '🤝', title: 'Feche o negócio', desc: 'Escolha a melhor forma de pagamento e leve seu carro para casa.' }
  ];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getDestaqueCars().subscribe(cars => this.destaques = cars);
    this.carService.getNewCars().subscribe(cars => this.novidades = cars);
  }
}
