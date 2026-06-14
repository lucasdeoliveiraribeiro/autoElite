export interface Car {
  id: number;
  marca: string;
  modelo: string;
  versao: string;
  ano: number;
  km: number;
  preco: number;
  cor: string;
  combustivel: 'Gasolina' | 'Etanol' | 'Flex' | 'Diesel' | 'Elétrico' | 'Híbrido';
  cambio: 'Manual' | 'Automático' | 'CVT' | 'Automatizado';
  motor: string;
  portas: number;
  imagem: string;
  imagens: string[];
  descricao: string;
  opcionais: string[];
  destaque: boolean;
  novo: boolean;
}

export interface CarFilter {
  marca?: string;
  anoMin?: number;
  anoMax?: number;
  precoMin?: number;
  precoMax?: number;
  combustivel?: string;
  cambio?: string;
  busca?: string;
}
