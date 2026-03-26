import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h1>Contact</h1>
        <p class="page-subtitle">
          Reach out and we will get back to you within a business day.
        </p>

        <div class="contact-grid">
          <div class="contact-item">
            <span class="label">Email</span>
            <a href="mailto:hello@cloudcorp.ai">hello&#64;cloudcorp.ai</a>
          </div>
          <div class="contact-item">
            <span class="label">Phone</span>
            <a href="tel:+27715007671">+27 71 500 7671</a>
          </div>
          <div class="contact-item">
            <span class="label">Location</span>
            <span>Johannesburg, South Africa</span>
          </div>
          <div class="contact-item">
            <span class="label">CloudVoice Platform</span>
            <a href="https://voice.cloudcorp.ai">voice.cloudcorp.ai</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .page-subtitle {
      font-size: 1.125rem;
      max-width: 420px;
      margin-top: var(--space-md);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-xl);
      margin-top: var(--space-2xl);
      max-width: 560px;
    }

    .contact-item {
      .label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-muted);
        margin-bottom: 4px;
      }

      a {
        color: var(--color-text);
        font-weight: 500;
        font-size: 1.0625rem;

        &:hover {
          text-decoration: underline;
        }
      }

      span:not(.label) {
        font-size: 1.0625rem;
        color: var(--color-secondary);
      }
    }

    @media (max-width: 480px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class Contact implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact',
      description: 'Get in touch with CloudCorp. Email hello@cloudcorp.ai or call +27 71 500 7671. Based in Johannesburg, South Africa.',
      url: '/contact',
    });
  }
}
