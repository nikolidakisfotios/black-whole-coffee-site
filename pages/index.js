import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center bg-[#0A0A0A]">
      
      {/* Event Horizon Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D97706] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#D97706] rounded-full blur-[180px] opacity-5 pointer-events-none"></div>
      
      {/* Refined Header / Logo Area */}
      <nav className="w-full max-w-5xl p-12 flex justify-center items-center z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#D97706] text-2xl">☕</span>
          <h1 className="text-3xl tracking-[0.4em] font-bold serif border-y border-[#4B5563] py-2 px-6">
            BLACK WHOLE
          </h1>
        </div>
      </nav>

      {/* Main Coming Soon Section */}
      <main className="flex-1 flex flex-col items-center justify-center z-10 px-4 text-center">
        <div className="space-y-6">
          <h2 className="text-7xl md:text-9xl serif italic text-[#F3F4F6] tracking-tight">
            Coming Soon
          </h2>
          
          <div className="h-[1px] w-24 bg-[#D97706] mx-auto my-8"></div>
          
          <p className="text-2xl md:text-3xl font-light tracking-[0.2em] text-[#D97706] uppercase">
            March 2026
          </p>
        </div>

        {/* Action Button (Hidden or Lead Gen) */}
        <div className="mt-16">
          <button className="px-10 py-4 border border-[#4B5563] text-[#4B5563] text-xs uppercase tracking-[0.3em] hover:border-[#D97706] hover:text-[#D97706] transition-all duration-500">
            Notify My Orbit
          </button>
        </div>
      </main>

      <footer className="p-12 text-gray-700 text-[10px] tracking-[0.5em] uppercase z-10 font-sans">
        Calculated Production • 2026 Precision Coffee
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        
        body {
          margin: 0;
          background-color: #0A0A0A;
          color: #F3F4F6;
          font-family: sans-serif;
          background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
        }

        .serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  )
}
