import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'AI Voice Agents & WhatsApp Automation',
      description: 'CloudCorp builds AI voice agents and WhatsApp automation for insurance, legal, and financial services businesses in South Africa.',
      url: '/',
    });
  }
}
