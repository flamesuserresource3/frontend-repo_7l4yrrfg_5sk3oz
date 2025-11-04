import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-black/5 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} FluxBlogs. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#privacy" className="hover:text-slate-900">Privacy</a>
              <a href="#terms" className="hover:text-slate-900">Terms</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
