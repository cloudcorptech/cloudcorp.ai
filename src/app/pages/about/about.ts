import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h1>About CloudCorp</h1>
        <div class="about-content">
          <p>
            CloudCorp is an AI automation company based in Johannesburg, South Africa.
            We build voice agents and WhatsApp automation that handle customer conversations
            for businesses that run on phone calls and messaging.
          </p>
          <p>
            Our product, CloudVoice, is a platform for building and deploying AI voice agents.
            Businesses use it to answer inbound calls, run outbound campaigns, and manage
            WhatsApp conversations — all from a single dashboard.
          </p>
          <p>
            We work primarily with insurance companies, law firms, financial services providers,
            and professional services businesses across South Africa. These are industries where
            customer calls are constant, after-hours coverage matters, and every missed call has
            a cost.
          </p>
          <p>
            CloudCorp (Pty) Ltd is registered in South Africa.
          </p>

          <div class="contact-block">
            <h2>Get in touch</h2>
            <div class="contact-details">
              <div>
                <span class="label">Email</span>
                <a href="mailto:hello@cloudcorp.ai">hello&#64;cloudcorp.ai</a>
              </div>
              <div>
                <span class="label">Phone</span>
                <a href="tel:+27715007671">+27 71 500 7671</a>
              </div>
              <div>
                <span class="label">Location</span>
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about-content {
      max-width: 640px;
      margin-top: var(--space-xl);

      p {
        margin-bottom: var(--space-lg);
        font-size: 1.0625rem;
      }
    }

    .contact-block {
      margin-top: var(--space-2xl);
      padding-top: var(--space-xl);
      border-top: 1px solid var(--color-border);

      h2 {
        margin-bottom: var(--space-lg);
      }
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: var(--space-md);

      .label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-muted);
        margin-bottom: 2px;
      }

      a {
        color: var(--color-text);
        font-weight: 500;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  `,
})
export class About implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'About',
      description: 'CloudCorp is an AI automation company based in Johannesburg, South Africa. We build voice agents and WhatsApp automation for businesses.',
      url: '/about',
    });
  }
}
