import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  searchTerm = '';
  currentSlide = 0;
  private timer: any;

  slides = [
    { bg: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80', label: 'Sedãs' },
    { bg: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1920&q=80', label: 'SUVs' },
    { bg: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=1920&q=80', label: 'Premium' }
  ];

  stats = [
    { value: '500+', label: 'Veículos' },
    { value: '10', label: 'Anos' },
    { value: '98%', label: 'Satisfação' },
    { value: '0%', label: 'Juros*' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  setSlide(i: number) {
    this.currentSlide = i;
  }

  search() {
    this.router.navigate(['/catalogo'], { queryParams: { busca: this.searchTerm } });
  }
}
