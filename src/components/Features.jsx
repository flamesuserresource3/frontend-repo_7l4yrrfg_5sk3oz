import React from 'react';
import { PenTool, Video, Briefcase, Rocket } from 'lucide-react';

const features = [
  {
    icon: PenTool,
    title: 'AI-Powered Writing',
    desc: 'Craft compelling blogs with assisted drafting, tone control, and SEO suggestions built-in.'
  },
  {
    icon: Video,
    title: 'Multimedia Ready',
    desc: 'Embed videos, podcasts, and live streams seamlessly within immersive layouts.'
  },
  {
    icon: Briefcase,
    title: 'Business Tooling',
    desc: 'Subscriptions, invoicing, and analytics to turn your content into revenue.'
  },
  {
    icon: Rocket,
    title: 'One-Click Launch',
    desc: 'Deploy to a global edge network with custom domains and automated backups.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built for creators and teams</h2>
          <p className="mt-4 text-slate-600">Everything you need to publish, scale, and monetize—without the bloat.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
