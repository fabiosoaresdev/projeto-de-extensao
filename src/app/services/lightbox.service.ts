import { Injectable, signal } from '@angular/core';

export interface LightboxMedia {
  src: string;
  alt: string;
  caption?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  readonly isOpen = signal<boolean>(false);
  readonly currentIndex = signal<number>(0);
  readonly items = signal<LightboxMedia[]>([]);

  open(items: LightboxMedia[], startIndex: number = 0): void {
    if (!items || items.length === 0) return;
    this.items.set(items);
    this.currentIndex.set(Math.max(0, Math.min(startIndex, items.length - 1)));
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }

  next(): void {
    const total = this.items().length;
    if (total === 0) return;
    this.currentIndex.update(idx => (idx + 1) % total);
  }

  prev(): void {
    const total = this.items().length;
    if (total === 0) return;
    this.currentIndex.update(idx => (idx - 1 + total) % total);
  }

  getCurrentItem(): LightboxMedia | null {
    const list = this.items();
    const idx = this.currentIndex();
    return list[idx] || null;
  }
}
