🚗 AutoElite Seminovos — Aplicação Angular
Trabalho acadêmico — Framework Angular | Desenvolvido para a disciplina de Front-End.
---
📋 Sobre o Projeto
Site de carros seminovos desenvolvido com Angular 17, demonstrando os principais conceitos do framework:
Componentes (Header, Footer, Hero, CarCard, FilterBar)
Serviços com injeção de dependência (CarService, FavoritesService)
Roteamento com Angular Router
HTTP Client (estrutura pronta para API REST)
Reactive Forms (página de Contato)
Two-way data binding com `[(ngModel)]`
Diretivas `*ngFor`, `*ngIf`
Pipes (number, currency)
Testes com Karma + Jasmine
---
🗂️ Estrutura do Projeto
```
src/app/
├── components/
│   ├── header/          # Navegação com scroll e menu mobile
│   ├── footer/          # Rodapé com informações e links
│   ├── hero/            # Banner com slideshow automático
│   ├── car-card/        # Card de veículo com favoritar
│   └── filter-bar/      # Filtros avançados
├── pages/
│   ├── home/            # Página inicial
│   ├── catalogo/        # Listagem com filtros e ordenação
│   ├── detalhes/        # Detalhe do veículo
│   ├── sobre/           # Sobre a empresa
│   └── contato/         # Formulário de contato
├── services/
│   ├── car.service.ts   # CRUD de veículos + filtros
│   └── favorites.service.ts  # Gerenciamento de favoritos
└── models/
    └── car.model.ts     # Interfaces TypeScript
```
---
▶️ Como Rodar
```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
ng serve

# Abrir: http://localhost:4200

# Rodar testes
ng test

# Build de produção
ng build
```
---
🧪 Testes (Karma + Jasmine)
Arquivos de teste:
`car.service.spec.ts` — 8 testes do serviço de veículos
`favorites.service.spec.ts` — 5 testes de favoritos
`car-card.component.spec.ts` — 4 testes do componente
```bash
ng test --watch=false --code-coverage
```
---
🛠️ Tecnologias
Tecnologia	Versão	Uso
Angular	17	Framework principal
TypeScript	5.x	Tipagem estática
SCSS	—	Estilização
RxJS	7.x	Observables e reatividade
Karma	6.x	Test runner
Jasmine	5.x	Framework de testes
---
📱 Funcionalidades
✅ Design responsivo (mobile-first)
✅ Slideshow automático no hero
✅ Filtros avançados (marca, ano, preço, combustível, câmbio)
✅ Ordenação de resultados
✅ Sistema de favoritos com BehaviorSubject
✅ Galeria de imagens no detalhe
✅ Formulário reativo com validação
✅ Roteamento com parâmetros e query params
✅ Loading states e empty states
✅ Link para WhatsApp no detalhe do veículo
