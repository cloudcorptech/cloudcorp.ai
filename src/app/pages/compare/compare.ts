import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { competitors } from '../../data/competitors';

@Component({
  selector: 'app-compare',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compare.html',
  styleUrl: './compare.scss',
})
export class Compare implements OnInit {
  private seo = inject(SeoService);
  protected competitors = competitors;

  ngOnInit(): void {
    this.seo.update({
      title: 'Compare CloudVoice',
      description: 'See how CloudVoice compares to Retell AI, Vapi, Synthflow, and Bland AI. Local support, Rand pricing, and native WhatsApp for South African businesses.',
      url: '/compare',
    });
  }
}
