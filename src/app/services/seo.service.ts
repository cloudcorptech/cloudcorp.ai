import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  update(config: {
    title: string;
    description: string;
    url?: string;
  }): void {
    const fullTitle = `${config.title} — CloudCorp`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: `https://cloudcorp.ai${config.url}` });
      const link = this.doc.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (link) {
        link.href = `https://cloudcorp.ai${config.url}`;
      }
    }
  }
}
