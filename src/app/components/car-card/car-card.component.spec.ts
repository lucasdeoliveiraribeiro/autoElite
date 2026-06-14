import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarCardComponent } from './car-card.component';
import { FavoritesService } from '../../services/favorites.service';
import { Car } from '../../models/car.model';

describe('CarCardComponent', () => {
  let component: CarCardComponent;
  let fixture: ComponentFixture<CarCardComponent>;

  const mockCar: Car = {
    id: 1, marca: 'Toyota', modelo: 'Corolla', versao: 'XEi 2.0',
    ano: 2022, km: 28000, preco: 149900, cor: 'Prata',
    combustivel: 'Flex', cambio: 'Automático', motor: '2.0 177cv',
    portas: 4, destaque: true, novo: false,
    imagem: 'img.jpg', imagens: ['img.jpg'],
    descricao: 'Descrição', opcionais: ['Ar digital']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarCardComponent],
      imports: [RouterTestingModule],
      providers: [FavoritesService]
    }).compileComponents();

    fixture = TestBed.createComponent(CarCardComponent);
    component = fixture.componentInstance;
    component.car = mockCar;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir nome do modelo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Corolla');
  });

  it('deve formatar preço em BRL', () => {
    const formatted = component.formatPrice(149900);
    expect(formatted).toContain('149');
    expect(formatted).toContain('R$');
  });

  it('deve formatar km com separador', () => {
    const formatted = component.formatKm(28000);
    expect(formatted).toContain('28');
    expect(formatted).toContain('km');
  });
});
