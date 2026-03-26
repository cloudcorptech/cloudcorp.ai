import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../../services/seo.service';
import { Competitor, competitors } from '../../../data/competitors';

@Component({
  selector: 'app-compare-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compare-detail.html',
  styleUrl: './compare-detail.scss',
})
export class CompareDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private seo = inject(SeoService);

  protected competitor = signal<Competitor | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const found = competitors.find(c => c.slug === slug);

    if (!found) {
      this.router.navigate(['/compare']);
      return;
    }

    this.competitor.set(found);
    this.seo.update({
      title: found.tagline,
      description: `Compare CloudVoice and ${found.name}. See features, pricing, and why CloudVoice is the better choice for South African businesses.`,
      url: `/compare/${found.slug}`,
    });
  }
}
