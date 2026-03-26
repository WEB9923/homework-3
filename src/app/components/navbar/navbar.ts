import { Component } from '@angular/core';
import { LucideMenu } from '@lucide/angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  showMobileNav = false;

  toggleShowMobileNav(): void {
    this.showMobileNav = !this.showMobileNav;
  }

  links = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Products' },
    { id: 3, label: 'Categories' },
    { id: 4, label: 'Profile' },
    { id: 5, label: 'Settings' },
  ];
}
