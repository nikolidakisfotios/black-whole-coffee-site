export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center relative overflow-hidden text-[#F3F4F6] font-serif">
      
      {/* 1. The Event Horizon Glow (The Amber Light) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D97706] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>

      {/* 2. Top Logo/Name */}
      <nav className="absolute top-12 flex flex-col items-center">
        <span className="text-[#D97706] text-2xl mb-2">☕</span>
        <h2 className="text-xl tracking-[0.5em] uppercase font-light border-b border-gray-800 pb-2">
          Black Whole
        </h2>
      </nav>

      {/* 3. Central Content */}
      <main className="z-10 text-center px-4">
        <h1 className="text-7xl md:text-9xl italic mb-6 tracking-tighter">
          Coming Soon
        </h1>
        
        <div className="w-16 h-[1px] bg-[#D97706] mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl tracking-[0.3em] uppercase text-[#D97706] font-sans font-light">
          March 2026
        </p>
      </main>

      {/* 4. Bottom Footer */}
      <footer className="absolute bottom-12 text-gray-600 text-[10px] tracking-[0.5em] uppercase font-sans">
        Calculated Production • 2026
      </footer>

      {/* Custom Global Styles for the Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          background-color: #0A0A0A;
          /* This adds the subtle "Stars" texture you see now */
          background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
        }

        h1, h2, .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}
