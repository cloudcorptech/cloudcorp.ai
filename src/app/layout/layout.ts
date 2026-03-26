import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  protected mobileMenuOpen = signal(false);
  protected currentYear = new Date().getFullYear();

  protected toggleMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  protected closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
