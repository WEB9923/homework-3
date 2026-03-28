import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { IProduct } from './models/interfaces';
import { LucideChartBarStacked } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, LucideChartBarStacked],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  activeSortField: string = '';
  activeSortMode: string = '';
  activeCategoryId: number | null = null;
  showMobileCategories: boolean = false;

  truncateText({ txt, length }: { txt: string; length: number }): string {
    return txt.length > length ? txt.slice(0, length) + '...' : txt;
  }

  getSpicinessLabel(level: number): string {
    if (level >= 4) return 'Very spicy';
    if (level < 4 && level >= 2) return 'Medium spicy';
    return 'Not spicy';
  }

  logProductNameAndId({ id, name }: { id: number; name: string }): void {
    console.log(`Product: id-${id}, name-${name}`);
  }

  toggleSort(field: 'price' | 'spiciness', mode: 'asc' | 'desc'): void {
    if (this.activeSortField === field && this.activeSortMode === mode) {
      this.activeSortField = '';
      this.activeSortMode = '';
      this.products = [...this.defaultProducts];
      return;
    }

    this.activeSortField = field;
    this.activeSortMode = mode;

    const sorted = [...this.defaultProducts];

    mode === 'asc'
      ? sorted.sort((a, b) => a[field] - b[field])
      : sorted.sort((a, b) => b[field] - a[field]);

    this.products = sorted;
  }

  toggleCategory(id: number): void {
    if (this.activeCategoryId === id) {
      this.activeCategoryId = null;
      this.products = [...this.defaultProducts];
      return;
    }

    this.activeCategoryId = id;

    this.products = this.defaultProducts.filter((product): boolean => product.categoryId === id);
  }

  toggleMobileCategory(id: number): void {
    this.toggleCategory(id);

    this.showMobileCategories = false;
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find((cat): boolean => cat.id === categoryId);

    return category ? category.name : 'unknown';
  }

  handleShowMobileMenu(): void {
    this.showMobileCategories = !this.showMobileCategories;
  }

  defaultProducts: IProduct[] = [
    {
      id: 1,
      name: 'Laab kai chicken salad',
      price: 10,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/laab_kai_chicken_salad.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Som tam papaya salad',
      price: 9.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/som_tam_papaya_salad.png',
      vegeterian: true,
      spiciness: 0,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Tom yam kai',
      price: 7,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_yam.png',
      vegeterian: false,
      spiciness: 3,
      categoryId: 2,
    },
    {
      id: 4,
      name: 'Tom kha kai',
      price: 7,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_kha.png',
      vegeterian: false,
      spiciness: 3,
      categoryId: 2,
    },
    {
      id: 5,
      name: 'Tom kha koong',
      price: 8,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_kha.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 2,
    },
    {
      id: 6,
      name: 'Tom yam koong',
      price: 8,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_yam.png',
      vegeterian: false,
      spiciness: 4,
      categoryId: 2,
    },
    {
      id: 7,
      name: 'Tom yam vegetarian',
      price: 7,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_yam.png',
      vegeterian: true,
      spiciness: 1,
      categoryId: 2,
    },
    {
      id: 8,
      name: 'Tom kha vegetarian',
      price: 7,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tom_kha.png',
      vegeterian: true,
      spiciness: 1,
      categoryId: 2,
    },
    {
      id: 9,
      name: "Sweet 'n sour chicken",
      price: 14,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/sweet_n_sour.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 3,
    },
    {
      id: 10,
      name: 'Chicken cashew',
      price: 14,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/chicken_cashew.png',
      vegeterian: false,
      spiciness: 1,
      categoryId: 3,
    },
    {
      id: 11,
      name: 'Kai see ew',
      price: 14,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/kai_see_ew.png',
      vegeterian: false,
      spiciness: 4,
      categoryId: 3,
    },
    {
      id: 12,
      name: 'Beef massaman',
      price: 14.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/beef_massaman.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 4,
    },
    {
      id: 13,
      name: 'Seafood chu chee',
      price: 16,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/chu_chee.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 5,
    },
    {
      id: 14,
      name: 'Penang shrimp',
      price: 16,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/red_curry.png',
      vegeterian: false,
      spiciness: 4,
      categoryId: 5,
    },
    {
      id: 15,
      name: 'Green curry veggies',
      price: 12.5,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/green_curry.png',
      vegeterian: true,
      spiciness: 0,
      categoryId: 6,
    },
    {
      id: 16,
      name: 'Tofu cashew',
      price: 12.5,
      nuts: true,
      image: 'https://course-jsbasic.javascript.ru/assets/products/tofu_cashew.png',
      vegeterian: true,
      spiciness: 0,
      categoryId: 6,
    },
    {
      id: 17,
      name: 'Red curry veggies',
      price: 12.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/red_curry_vega.png',
      vegeterian: true,
      spiciness: 4,
      categoryId: 6,
    },
    {
      id: 18,
      name: 'Krapau tofu',
      price: 12.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/krapau_vega.png',
      vegeterian: true,
      spiciness: 0,
      categoryId: 6,
    },
    {
      id: 19,
      name: 'Prawn crackers',
      price: 2.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/kroepoek.png',
      vegeterian: false,
      spiciness: 1,
      categoryId: 7,
    },
    {
      id: 20,
      name: 'Fish cakes',
      price: 6.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/fish_cakes.png',
      vegeterian: false,
      spiciness: 1,
      categoryId: 7,
    },
    {
      id: 21,
      name: 'Chicken satay',
      price: 6.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/sate.png',
      vegeterian: false,
      spiciness: 1,
      categoryId: 7,
    },
    {
      id: 22,
      name: 'Satay sauce',
      price: 1.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/satesaus.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 7,
    },
    {
      id: 23,
      name: 'Shrimp springrolls',
      price: 6.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/koong_hom_pha.png',
      vegeterian: false,
      spiciness: 3,
      categoryId: 7,
    },
    {
      id: 24,
      name: 'Mini vegetarian spring rolls',
      price: 6.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/mini_vega_springrolls.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 7,
    },
    {
      id: 25,
      name: 'Chicken springrolls',
      price: 6.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/chicken_loempias.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 7,
    },
    {
      id: 26,
      name: 'Thai fried rice',
      price: 7.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/fried_rice.png',
      vegeterian: false,
      spiciness: 2,
      categoryId: 8,
    },
    {
      id: 27,
      name: 'Fresh prawn crackers',
      price: 2.5,
      nuts: false,
      image: 'https://course-jsbasic.javascript.ru/assets/products/kroepoek.png',
      vegeterian: false,
      spiciness: 1,
      categoryId: 8,
    },
  ];

  products = [...this.defaultProducts];

  categories: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'Salads',
    },
    {
      id: 2,
      name: 'Soups',
    },
    {
      id: 3,
      name: 'Chicken-Dishes',
    },
    {
      id: 4,
      name: 'Beef-Dishes',
    },
    {
      id: 5,
      name: 'Seafood-Dishes',
    },
    {
      id: 6,
      name: 'Vegetable-Dishes',
    },
    {
      id: 7,
      name: 'Bits&Bites',
    },
    {
      id: 8,
      name: 'On-The-Side',
    },
  ];
}
