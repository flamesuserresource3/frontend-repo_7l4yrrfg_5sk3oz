import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'Perfect to explore',
    features: ['Unlimited posts', 'Basic analytics', 'Community themes', 'Email support'],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$18',
    tagline: 'For growing creators',
    features: ['Custom domain', 'Advanced analytics', 'AI writing suite', 'Priority support'],
    cta: 'Upgrade to Pro',
    popular: true,
  },
  {
    name: 'Business',
    price: '$49',
    tagline: 'For teams and brands',
    features: ['Team workspaces', 'SSO & Roles', 'Monetization tools', 'SLA support'],
    cta: 'Contact sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-[1] h-64 bg-gradient-to-b from-indigo-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Choose a plan that scales with your audience. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm ${tier.popular ? 'ring-2 ring-slate-900' : ''}`}
            >
              {tier.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-sm">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">{tier.price}</span>
                <span className="text-sm text-slate-500">/mo</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{tier.tagline}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${tier.popular ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 border border-black/10 hover:bg-slate-50'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
