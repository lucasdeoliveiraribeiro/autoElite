import { TestBed } from '@angular/core/testing';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve iniciar sem favoritos', () => {
    expect(service.count()).toBe(0);
  });

  it('deve adicionar favorito', () => {
    service.toggle(1);
    expect(service.isFavorite(1)).toBeTrue();
    expect(service.count()).toBe(1);
  });

  it('deve remover favorito ao toglar novamente', () => {
    service.toggle(1);
    service.toggle(1);
    expect(service.isFavorite(1)).toBeFalse();
    expect(service.count()).toBe(0);
  });

  it('deve emitir atualização via observable', (done) => {
    service.favorites$.subscribe(favs => {
      if (favs.includes(5)) {
        expect(favs.length).toBe(1);
        done();
      }
    });
    service.toggle(5);
  });
});
