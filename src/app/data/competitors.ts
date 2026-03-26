export interface CompetitorFeature {
  name: string;
  cloudvoice: string;
  competitor: string;
}

export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  pricing: {
    cloudvoice: string;
    competitor: string;
  };
  features: CompetitorFeature[];
  advantages: string[];
}

export const competitors: Competitor[] = [
  {
    slug: 'retell-ai',
    name: 'Retell AI',
    tagline: 'CloudVoice vs Retell AI',
    description: 'Retell AI is a US-based voice agent platform focused on developer APIs. CloudVoice is built for South African businesses with local support, Rand pricing, and native WhatsApp integration.',
    pricing: {
      cloudvoice: 'Pay-as-you-go in ZAR. No minimum commitment. Per-minute billing with transparent breakdowns.',
      competitor: 'USD pricing. Per-minute billing starting at $0.07/min. Enterprise plans require annual contracts.',
    },
    features: [
      { name: 'Speech-to-Text', cloudvoice: 'Deepgram (optimised for SA accents)', competitor: 'Deepgram' },
      { name: 'Text-to-Speech', cloudvoice: 'ElevenLabs, Deepgram', competitor: 'ElevenLabs, PlayHT, Deepgram' },
      { name: 'LLM Provider', cloudvoice: 'Anthropic Claude, OpenAI', competitor: 'OpenAI, Anthropic, custom' },
      { name: 'WhatsApp Integration', cloudvoice: 'Native — voice + text + media', competitor: 'Not available' },
      { name: 'Phone Providers', cloudvoice: 'Twilio, Telnyx', competitor: 'Twilio, Vonage, Telnyx' },
      { name: 'Knowledge Base', cloudvoice: 'Built-in RAG with Qdrant', competitor: 'Basic document upload' },
      { name: 'Custom Tools', cloudvoice: 'JS functions + webhook tools', competitor: 'Webhook-based tools' },
      { name: 'Local Currency Billing', cloudvoice: 'ZAR (Rand)', competitor: 'USD only' },
      { name: 'Local Support', cloudvoice: 'Johannesburg-based team', competitor: 'US-based support' },
      { name: 'Campaign Dialler', cloudvoice: 'Built-in outbound campaigns', competitor: 'Not available' },
      { name: 'Browser Calling', cloudvoice: 'Embeddable widget', competitor: 'Web call widget' },
      { name: 'Call Analytics & QA', cloudvoice: 'Built-in analytics, QA rules, sentiment', competitor: 'Basic call logs' },
    ],
    advantages: [
      'Rand-based pricing removes exchange rate risk for SA businesses',
      'Native WhatsApp integration — voice and text in one platform',
      'Built-in outbound campaign dialler for proactive customer engagement',
      'Local team that understands South African business requirements',
      'STT models tuned for South African English accents',
    ],
  },
  {
    slug: 'vapi',
    name: 'Vapi',
    tagline: 'CloudVoice vs Vapi',
    description: 'Vapi is a developer-first voice AI API. CloudVoice offers a complete platform with a management dashboard, built-in tools, and native WhatsApp — no engineering team required.',
    pricing: {
      cloudvoice: 'Pay-as-you-go in ZAR. All-inclusive per-minute pricing. No hidden platform fees.',
      competitor: 'USD pricing. $0.05/min platform fee plus provider costs. Can exceed $0.15/min total.',
    },
    features: [
      { name: 'Speech-to-Text', cloudvoice: 'Deepgram (SA-optimised)', competitor: 'Deepgram, Gladia, Talkscriber' },
      { name: 'Text-to-Speech', cloudvoice: 'ElevenLabs, Deepgram', competitor: 'ElevenLabs, PlayHT, LMNT, Deepgram' },
      { name: 'LLM Provider', cloudvoice: 'Anthropic Claude, OpenAI', competitor: 'OpenAI, Anthropic, Groq, custom' },
      { name: 'WhatsApp Integration', cloudvoice: 'Native — full channel support', competitor: 'Not available' },
      { name: 'Phone Providers', cloudvoice: 'Twilio, Telnyx', competitor: 'Twilio, Vonage, Vapi phone' },
      { name: 'Knowledge Base', cloudvoice: 'RAG with quality scoring and analytics', competitor: 'Custom knowledge base' },
      { name: 'Custom Tools', cloudvoice: 'JS + webhook with visual builder', competitor: 'Function calling via API' },
      { name: 'Management Dashboard', cloudvoice: 'Full web dashboard', competitor: 'API-only (dashboard in beta)' },
      { name: 'Local Currency Billing', cloudvoice: 'ZAR (Rand)', competitor: 'USD only' },
      { name: 'Local Support', cloudvoice: 'Johannesburg-based team', competitor: 'US-based, async support' },
      { name: 'Campaign Dialler', cloudvoice: 'Built-in outbound campaigns', competitor: 'Requires custom integration' },
      { name: 'Call Analytics & QA', cloudvoice: 'Built-in analytics, QA rules, sentiment', competitor: 'Basic analytics via API' },
    ],
    advantages: [
      'Complete platform with dashboard — no engineering team needed to get started',
      'Native WhatsApp support for the South African market where WhatsApp dominates',
      'Transparent Rand pricing with no hidden per-minute platform fees',
      'Built-in campaign dialler, QA engine, and knowledge base',
      'Local support team in your timezone',
    ],
  },
  {
    slug: 'synthflow',
    name: 'Synthflow',
    tagline: 'CloudVoice vs Synthflow',
    description: 'Synthflow is a no-code voice AI builder with template-based agents. CloudVoice gives you deeper control over the voice pipeline while still being accessible to non-technical users.',
    pricing: {
      cloudvoice: 'Pay-as-you-go in ZAR. Scale without monthly plan ceilings.',
      competitor: 'Monthly plans from $29/mo (starter) to $900/mo (agency). Minute caps per plan.',
    },
    features: [
      { name: 'Speech-to-Text', cloudvoice: 'Deepgram (SA-optimised)', competitor: 'Deepgram' },
      { name: 'Text-to-Speech', cloudvoice: 'ElevenLabs, Deepgram', competitor: 'ElevenLabs, PlayHT' },
      { name: 'LLM Provider', cloudvoice: 'Anthropic Claude, OpenAI', competitor: 'OpenAI' },
      { name: 'WhatsApp Integration', cloudvoice: 'Native — voice, text, media, flows', competitor: 'Limited (text only via Twilio)' },
      { name: 'Phone Providers', cloudvoice: 'Twilio, Telnyx', competitor: 'Twilio, Synthflow numbers' },
      { name: 'Knowledge Base', cloudvoice: 'RAG with chunking, quality scores, versioning', competitor: 'Document upload' },
      { name: 'Custom Tools', cloudvoice: 'JS functions + webhook tools', competitor: 'Webhook actions' },
      { name: 'Multi-tenancy', cloudvoice: 'Built-in org management with roles', competitor: 'White-label on agency plan' },
      { name: 'Local Currency Billing', cloudvoice: 'ZAR (Rand)', competitor: 'USD only' },
      { name: 'Local Support', cloudvoice: 'Johannesburg-based team', competitor: 'EU/US-based support' },
      { name: 'Campaign Dialler', cloudvoice: 'Built-in with scheduling', competitor: 'Built-in batch calling' },
      { name: 'Call Analytics & QA', cloudvoice: 'Analytics, QA rules, sentiment analysis', competitor: 'Basic call logs and recordings' },
    ],
    advantages: [
      'No monthly plan caps — pay only for what you use',
      'Full WhatsApp channel support, not just text relay',
      'Deeper knowledge base with quality scoring and gap analysis',
      'Multi-org platform with granular role-based access',
      'Rand pricing and local support for SA businesses',
    ],
  },
  {
    slug: 'bland-ai',
    name: 'Bland AI',
    tagline: 'CloudVoice vs Bland AI',
    description: 'Bland AI focuses on high-volume outbound calling at scale. CloudVoice handles both inbound and outbound with a full-featured platform, WhatsApp integration, and South African market focus.',
    pricing: {
      cloudvoice: 'Pay-as-you-go in ZAR. Transparent per-minute pricing for all features.',
      competitor: 'From $0.09/min (connected). Enterprise pricing for volume. USD only.',
    },
    features: [
      { name: 'Speech-to-Text', cloudvoice: 'Deepgram (SA-optimised)', competitor: 'Proprietary + Deepgram' },
      { name: 'Text-to-Speech', cloudvoice: 'ElevenLabs, Deepgram', competitor: 'Proprietary voices' },
      { name: 'LLM Provider', cloudvoice: 'Anthropic Claude, OpenAI', competitor: 'Custom fine-tuned models' },
      { name: 'WhatsApp Integration', cloudvoice: 'Native — full channel', competitor: 'Not available' },
      { name: 'Phone Providers', cloudvoice: 'Twilio, Telnyx', competitor: 'Bland phone infrastructure' },
      { name: 'Knowledge Base', cloudvoice: 'RAG with analytics and versioning', competitor: 'Pathway-based knowledge' },
      { name: 'Custom Tools', cloudvoice: 'JS + webhook tools', competitor: 'Custom tools via API' },
      { name: 'Inbound Handling', cloudvoice: 'Full inbound agent platform', competitor: 'Primarily outbound focused' },
      { name: 'Local Currency Billing', cloudvoice: 'ZAR (Rand)', competitor: 'USD only' },
      { name: 'Local Support', cloudvoice: 'Johannesburg-based team', competitor: 'US-based support' },
      { name: 'Campaign Dialler', cloudvoice: 'Built-in with contact management', competitor: 'Enterprise batch API' },
      { name: 'Call Analytics & QA', cloudvoice: 'Built-in analytics, QA, sentiment', competitor: 'Webhook-based logging' },
    ],
    advantages: [
      'Full inbound + outbound platform, not just a dialler',
      'Native WhatsApp for omnichannel customer engagement',
      'Management dashboard accessible to non-technical teams',
      'Rand pricing eliminates USD exchange rate exposure',
      'Local presence and support in South Africa',
    ],
  },
];
