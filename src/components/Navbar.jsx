import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-slate-900">FluxBlogs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#demo" className="hover:text-slate-900 transition">Demo</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#login" className="hidden sm:inline-flex px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 shadow-sm">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
