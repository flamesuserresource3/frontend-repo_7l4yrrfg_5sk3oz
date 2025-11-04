import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />

      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              Interactive • Tech • Futuristic
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              The 3D-first platform for blogs, business, and entertainment
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 sm:text-lg">
              Launch, manage, and monetize your content with a sleek, minimalist interface powered by real-time 3D interactivity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
              >
                <Rocket className="h-4 w-4" />
                Start for free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center rounded-md border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm hover:bg-white"
              >
                Live demo
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">No credit card required • Free plan available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
