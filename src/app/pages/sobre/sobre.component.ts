import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  equipe = [
    { nome: 'Carlos Mendes', cargo: 'Diretor Geral', foto: '👨‍💼' },
    { nome: 'Ana Paula Costa', cargo: 'Gerente Comercial', foto: '👩‍💼' },
    { nome: 'Rafael Souza', cargo: 'Especialista em Avaliação', foto: '👨‍🔧' },
    { nome: 'Juliana Lima', cargo: 'Analista Financeira', foto: '👩‍💻' }
  ];

  valores = [
    { icon: '🤝', titulo: 'Transparência', desc: 'Todas as informações do veículo disponíveis, sem surpresas.' },
    { icon: '⭐', titulo: 'Qualidade', desc: 'Selecionamos apenas veículos que passam em nossa rigorosa avaliação.' },
    { icon: '💙', titulo: 'Comprometimento', desc: 'Nosso sucesso é o seu sucesso. Atendemos com dedicação total.' },
    { icon: '🛡️', titulo: 'Segurança', desc: 'Documentação regularizada e garantia em todos os veículos.' }
  ];
}
