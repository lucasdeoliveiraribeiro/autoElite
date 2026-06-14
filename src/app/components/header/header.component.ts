import { Component, OnInit, HostListener } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  favCount = 0;

  constructor(private favService: FavoritesService) {}

  ngOnInit(): void {
    this.favService.favorites$.subscribe(favs => this.favCount = favs.length);
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
