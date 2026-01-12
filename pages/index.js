export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* Visual Decor: The Event Horizon Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D97706] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <nav className="w-full max-w-5xl p-8 flex justify-between items-center z-10">
        <div className="text-xl tracking-[0.3em] font-bold serif">BLACK WHOLE</div>
        <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-[#D97706] transition-colors">The Philosophy</a>
          <a href="#" className="hover:text-[#D97706] transition-colors">Rare Varieties</a>
          <a href="#" className="hover:text-[#D97706] transition-colors">Logistics</a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center z-10 px-4 text-center">
        <h2 className="text-sm uppercase tracking-[0.5em] text-[#D97706] mb-4">Precision Coffee Production</h2>
        <h1 className="text-6xl md:text-8xl serif mb-8 max-w-4xl leading-tight">
          Where Time and <br/> <span className="italic">Flavor Collide.</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* Main Action Button */}
          <button className="px-12 py-5 bg-[#D97706] text-black font-bold uppercase tracking-widest hover:bg-[#F59E0B] transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
            Schedule Tomorrow's Batch
          </button>
          
          {/* Secondary Button */}
          <button className="px-12 py-5 border border-gray-600 font-bold uppercase tracking-widest hover:border-[#D97706] hover:text-[#D97706] transition-all duration-300">
            View Rare Varieties
          </button>
        </div>
      </main>

      <footer className="p-12 text-gray-600 text-[10px] tracking-[0.4em] uppercase z-10">
        Calculated Production • {new Date().getFullYear() + 1} Orbits
      </footer>
    </div>
  )
}
